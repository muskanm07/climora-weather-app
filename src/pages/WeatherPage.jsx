import { useEffect, useState } from "react"
 import { useSearchParams } from 'react-router-dom'
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
       const [data, setData] = useState(null)
       const [searchParams] = useSearchParams()
       const city = searchParams.get('city')
      
     
      useEffect(()=>{
       const handleSearch=async()=>{
       
        if(!city){
        return
       }
     
        try{
         setError("")
         setLoading(true)
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c0d29462f76f6c518c3d86e01238ba06&units=metric`)
        const data=await response.json()
         if(data.cod!=200){
            setError("city not found")
            setData(null)
            setSearch("")
         }else{
            setRecentSearch(prev=>[search,...prev].slice(0,5))
            setData(data)
            setSearch("")
         }
        }catch(e){
            setError("something went wrong")
        } finally{
            setLoading(false)
        }  
     }
      handleSearch()
   },[city])
    return(
       
       
            <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex flex-col items-center justify-start pt-24 p-6 gap-6">
             <SearchBar search={search} 
              setSearch={setSearch} 
              
             />
              

            {data && <WeatherCard city={data} />}
                
            {loading && <Loading/>}
            {error && <ErrorHandling error={error}/>}
             </div>  
      
    )
}