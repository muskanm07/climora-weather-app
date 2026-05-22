import {  useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import ErrorHandling from './ErrorHandling'
import Loading from './Loading'
import RecentSearches from './RecentSearches'
import LoginForm from './LoginForm'

function App() {
  
  const [search,setSearch]=useState("")
  const [city,setCity]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")
  const [recentSearch,setRecentSearch]=useState([])
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [username,setUserName]=useState("")
  const [password,setPassWord]=useState("")
  const [loginError,setLogInError]=useState({})
    
    
   
    const handleSearch=async(e)=>{
       e.preventDefault()
       if(!search.trim()){
       setError("Please enter city name")
       return
     }
     try{
       setLoading(true)
       setError("")
      
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c0d29462f76f6c518c3d86e01238ba06&units=metric`)
      const result= await response.json()
    
      if(result.cod!=200){
        setError(result.message)
         setCity(null)
         setSearch("")

   
      }
      else{
      setRecentSearch(prev=>[search,...prev].slice(0,5))
      setCity(result)
      setSearch("")
     }
    }catch(e){
       setError("something went wrong")
      
    }finally{
       setLoading(false)
      }
   }
  //  useEffect(()=>{
  //    localStorage.setItem(
  //     "recentSearch",JSON.stringify(recentSearch)
  //    )
  //    },[recentSearch])

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
         setUserName("")
         setPassWord("")
        localStorage.setItem("username",username)
      
    }
   
   

    
  return (
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
           <SearchBar
       search={search}
       setSearch={setSearch}
       handleSearch={handleSearch}
       />
        <RecentSearches
       recentSearch={recentSearch}
        />
       
           { city?.weather 
          && <WeatherCard 
          city={city} />}
           </>
  )
}
       {loading && <Loading/>}
       {error && <ErrorHandling error={error}/>}
    </>
  )
}

export default App

      