export const getWeather=async(city)=>{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0d29462f76f6c518c3d86e01238ba06&units=metric`)
   const data=await response.json()
   return data;
}