import { useEffect, useState } from "react"
 import { useSearchParams } from 'react-router-dom'
import ErrorHandling from "../components/ErrorHandling"
import Loading from "../components/Loading"
import RecentSearches from "../components/RecentSearches"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"
import Profile from "./Profile"

export default function DashBoard({recentSearch,setRecentSearch}){
       const [search ,setSearch]=useState("")
      
       const [loading,setLoading]=useState(false)
       const [error,setError]=useState("")
       const [data, setData] = useState(()=>{
         const saved=localStorage.getItem('lastWeather')
         return saved?JSON.parse(saved):null
       })
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
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
        const data=await response.json()
         if(data.cod!=200){
            setError("city not found")
            setData(null)
            setSearch("")
         }else{
            setRecentSearch(prev=>[city,...prev].slice(0,10))
            setData(data)
             localStorage.setItem('recentSearch',JSON.stringify([city,...recentSearch].slice(0,10)))
             localStorage.setItem('lastWeather',JSON.stringify(data))
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
       
            <div className="min-h-screen bg-gradient-to-br from-[#ff8177] to-[#b12a5b] flex flex-col items-center justify-start pt-24 p-6 gap-6">
             <SearchBar search={search} 
             setSearch={setSearch}
              
             />
            
             

            {data && <WeatherCard city={data} />}
                
            {loading && <Loading/>}
            {error && <ErrorHandling error={error}/>}
             </div>  
      
    )
}