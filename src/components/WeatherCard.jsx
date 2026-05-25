

import clearVideo from "../assets/4196175-hd_1920_1080_30fps.mp4"
import cloudVideo from "../assets/5930986-hd_1920_1080_30fps.mp4"
import rainVideo from "../assets/20351897-hd_720_1280_30fps.mp4"
import haze from "../assets/15024250_1080_1920_24fps.mp4"


export default function WeatherCard({city}){
       
      if (!city) return null;


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

      
    return(
      
       <div className="weatherCard">
            <h2>{city.name}, {city.sys.country}</h2> 
             <p>{city.weather[0].description}</p> 
            <video 
              key={city.weather[0].main}
            autoPlay
            loop
            muted
             preload="auto"
            style={{
              height:"12rem",
              width:"18rem",
              objectFit:"cover",
              borderRadius:"12px"
            }} >
               <source
    src={getWeatherVideo(city.weather[0].main)}
    type="video/mp4"
  />
  </video>
            <p>Feels Like: {Math.round(city.main.feels_like)}°C</p>
            <p>Min: {Math.round(city.main.temp_min)}°C</p>
            <p>Max: {Math.round(city.main.temp_max)}°C</p>
            <p>Humidity: {city.main.humidity}%</p>
            <p>Wind: {city.wind.speed} m/s</p>
          
          </div>
         
    )
}