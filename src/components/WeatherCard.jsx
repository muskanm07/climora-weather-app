

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
       <div className="weatherCard">
        <div className="weather-main">
            <h2>{city.city.name}, {city.city.country}</h2> 
             <h3> {Math.round(currentWeather.main.temp)}°C</h3>
            
            <video 
             key={currentWeather.weather[0].description}
            autoPlay
            loop
            muted
             preload="auto"
            style={{
              height:"11rem",
              width:"14rem",
              objectFit:"cover",
              borderRadius:"12px"
            }} >
              <source src={getWeatherVideo(currentWeather.weather[0].description)} type="video/mp4" />
  
  </video>
             <p>{currentWeather.weather[0].description}</p> 
            <p>Feels Like: {Math.round(currentWeather.main.feels_like)}°C</p>
            <p>Max: {Math.round(currentWeather.main.temp_max)}°C</p>
            <p>Humidity: {currentWeather.main.humidity}%</p>
            <p>Wind: {currentWeather.wind.speed} m/s</p>
          
          </div>
          </div>
           <div className="forecast-container">
           
          {city.list
     .filter((item) => item.dt_txt.includes("12:00:00"))
     .slice(0,5)
      .map((item) => (
          
          <div className="five-days-forecast" key={item.dt}>
             {/* {item.dt_txt} */}
             <div className="forecast-days">
           <p className="forecast">{new Date(item.dt_txt).toLocaleDateString("en-US",{
            weekday:"short",
            month:"short",
            day:"numeric"
           })}</p>
            
           <p className="forecast">{Math.round(item.main.temp)}°C</p>
           <video 
              key={item.weather[0].description}
            autoPlay
            loop
            muted
             preload="auto"
            style={{
              height:"4rem",
              width:"5rem",
              objectFit:"cover",
              borderRadius:"12px"
            }} >
              <source src={getWeatherVideo(item.weather[0].description)} type="video/mp4" />
  </video>
  <p className="forecast">{item.weather[0].description}</p>
           
            </div>
            </div>
           
     ))}
     </div>
         
          </>
         
    )
}