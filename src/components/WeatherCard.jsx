
import clearVideo from "../assets/4196175-hd_1920_1080_30fps.mp4"
import cloudVideo from "../assets/5930986-hd_1920_1080_30fps.mp4"
import rainVideo from "../assets/20351897-hd_720_1280_30fps.mp4"
import haze from "../assets/15024250_1080_1920_24fps.mp4"


export default function WeatherCard({city}){
      
      

      if (!city) return null;
     const currentWeather=city.list[0]
    

   const getWeatherVideo=(condition)=>{
  if(condition.toLowerCase().includes("rain"))
    return rainVideo
  if(condition.toLowerCase().includes("haze"))
    return haze

  if(condition.toLowerCase().includes("clear"))
    return  clearVideo

  if(condition.toLowerCase().includes("cloud"))
    return cloudVideo
  return cloudVideo
  
}
   console.log(city.list)
 console.log(
  city.list.map(
    (item) => item.weather[0].description
  )
)

      
    return(
      <>
       <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex flex-col items-center justify-start p-6 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white w-full max-w-sm shadow-xl">
           
            <h2 className="text-2xl font-bold text-center">{city.city.name}, {city.city.country}</h2> 
             <h3 className="text-7xl font-black text-center my-3"> {Math.round(currentWeather.main.temp)}°C</h3>
            <div className=" flex justify-center my-3">
            <video 
           
             key={currentWeather.weather[0].description}
            autoPlay
            loop
            muted
             preload="auto"
             className="h-44 w-56 object-cover rounded-2xl"
            >
              <source src={getWeatherVideo(currentWeather.weather[0].description)} type="video/mp4" />
  
  </video>
  </div>
           
             <p className="text-center capitalize text-lg opacity-80">{currentWeather.weather[0].description}</p>
              <div className="grid grid-cols-2 gap-3 mt-5">
               <div className="bg-white/15 rounded-xl p-3">
            <p className="text-xs opacity-60">Feels Like</p>
            <p className="font-semibold text-lg">{Math.round(currentWeather.main.feels_like)}°C</p>
            </div>
               <div className="bg-white/15 rounded-xl p-3">
            <p className="text-xs opacity-60">Max Temp</p>
            <p className="font-semibold text-lg"> {Math.round(currentWeather.main.temp_max)}°C</p>
            </div>
              <div className="bg-white/15 rounded-xl p-3">
            <p className="text-xs opacity-60" >Humidity </p>
            <p className="font-semibold text-lg">{currentWeather.main.humidity}%</p>
             </div>
              <div className="bg-white/15 rounded-xl p-3">
              <p className="text-xs opacity-60">Wind</p>
            <p className="font-semibold text-lg"> {currentWeather.wind.speed} m/s</p>
           </div>
          </div>
          </div>
          
         
           <div className="flex gap-3 overflow-x-auto w-full max-w-sm pb-2">
           
          {city.list
     .filter((item) => item.dt_txt.includes("12:00:00"))
     .slice(0,5)
      .map((item) => (
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 text-white text-center min-w-[90px]" key={item.dt}>
             {/* {item.dt_txt} */}
             
           <p className="text-xs opacity-70">{new Date(item.dt_txt).toLocaleDateString("en-US",{
            weekday:"short",
            month:"short",
            day:"numeric"
           })}</p>
            
           <p className="font-bold" >{Math.round(item.main.temp)}°C</p>
           <video 
              key={item.weather[0].description}
            autoPlay
            loop
            muted
             preload="auto"
             className="h-12 w-14 object-cover rounded-lg" >
              <source src={getWeatherVideo(item.weather[0].description)} type="video/mp4" />
  </video>
  <p className="text-xs opacity-70 capitalize">{item.weather[0].description}</p>
           
            </div>
            
          
           
     ))}
     </div>
     </div>
         
          </>
         
    )
}