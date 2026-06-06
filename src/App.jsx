
import { Route, Routes ,Navigate} from 'react-router-dom'
import { useState } from 'react'

// import './App.css'
import NavBar from './components/Navbar'
import WeatherPage from './pages/WeatherPage'
import HomePage from './pages/Home'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs';



function App() {
  
     const [recentSearch,setRecentSearch]=useState([])
 
          
  return (
          <>
         <NavBar/>
         <Routes>
             <Route path='/' 
             element={<Navigate to="/home"/>}/>

            <Route path='/home'
            element={<HomePage/>}/>
            

           
            <Route path='/weatherpage'
            element={<WeatherPage recentSearch={recentSearch} setRecentSearch={setRecentSearch}/>}/>
         <Route path='/profile'
         element={<Profile recentSearch={recentSearch}/>}/>
           
           <Route path='/aboutus'
           element={<AboutUs/>}/>
          </Routes>
          
          
      </>
  )
}

export default App

      