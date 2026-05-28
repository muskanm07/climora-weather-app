import { useState } from "react"
import LoginForm from "./Login"
import ErrorHandling from "../components/ErrorHandling"
import Loading from "../components/Loading"
import RecentSearches from "../components/RecentSearches"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"
import Profile from "./Profile"

export default function WeatherPage(){
       const [search ,setSearch]=useState("")
       const [recentSearch,setRecentSearch]=useState([])
       const [loading,setLoading]=useState(false)
       const [error,setError]=useState("")
       const [city,setCity]=useState(null)
     
       const [isLoggedIn,setIsLoggedIn]=useState(false)
       const [logOut,setLogOut]=useState(false)
       const [username,setUserName]=useState("")
       const [password,setPassWord]=useState("")
       const [loginError,setLogInError]=useState({})
       const handleSearch=async(e)=>{
        e.preventDefault()
       if(!search.trim()){
        setError("please enter city name")
        return
       }
        try{
         setError("")
         setLoading(true)
        
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=c0d29462f76f6c518c3d86e01238ba06&units=metric`)
        const data=await response.json()
         if(data.cod!=200){
            setError("city not found")
            setCity(null)
            setSearch("")
         }else{
            setRecentSearch(prev=>[search,...prev].slice(0,5))
            setCity(data)
            setSearch("")
         }
        }catch(e){
            setError("something went wrong")
        } finally{
            setLoading(false)
        }

       }

       const handleFormSubmit=(e)=>{
       e.preventDefault()
       const errors={}
       if(!username.trim()){
       
       errors.username="please enter username"
       
       }
       if(!password.trim()){
         errors.password="please enter password"
      }
       if(Object.keys(errors).length>0){
         setLogInError(errors)
         return
       }
          setLogInError({})
          setIsLoggedIn(true)
          setUserName(username)
          setPassWord("")
         localStorage.setItem("username",username)
      
    }
    const LogOut =()=>{
       setLogOut(true)
        alert("do yo want to log out")
    }
   
    return(
        <>
         { 
               !isLoggedIn ?(<LoginForm 
                 username={username}
                 setUserName={setUserName}
                 password={password}
                 setPassWord={setPassWord} 
                 handleFormSubmit={handleFormSubmit} 
                 errors={loginError}
                  />):(
                    <>
             <SearchBar search={search} 
              setSearch={setSearch} 
              handleSearch={handleSearch} />
              {/* <RecentSearches recentSearch={recentSearch}/> */}

              {city && <WeatherCard city={city} />}
              {/* <Profile username={username} LogOut={LogOut} recentSearch={recentSearch}/> */}
              </>
                  )}
                
            {loading && <Loading/>}
            {error && <ErrorHandling error={error}/>}
               
      </>
    )
}