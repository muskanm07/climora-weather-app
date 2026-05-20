import {  useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import ErrorHandling from './ErrorHandling'
import Loading from './Loading'

function App() {
  
  const [search,setSearch]=useState("")
  const [city,setCity]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")
    
    
   
    const handleSearch=async()=>{
    if(!search){
    setError("Please enter city name")
    return
   }

    try{
      setSearch("")
      setLoading(true)
      setError("")
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c0d29462f76f6c518c3d86e01238ba06&units=metric`)
    const result= await response.json()
    setCity(result)
   if(result.cod!=200){
   setError(result.message)
   
   }
    }catch(e){
     setError("something went wrong")
      
    } finally{
      setLoading(false)
      }
   }
    
  
    
  return (
    <>
       <SearchBar
       search={search}
       setSearch={setSearch}
       handleSearch={handleSearch}/>

       {city &&city.weather && <WeatherCard city={city} />}
       {loading && <Loading/>}
       {error && <ErrorHandling error={error}/>}
    </>
  )
}

export default App

      