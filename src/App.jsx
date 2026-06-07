
import { Route, Routes ,Navigate} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import DashBoard from './pages/Dashboard'
import HomePage from './pages/Home'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs';



function App() {
  
     const [recentSearch,setRecentSearch]=useState(() => {
  const saved = localStorage.getItem('recentSearch')
  return saved ? JSON.parse(saved) : []
})

 
          
  return (
          <>
         <NavBar/>
         <Routes>
             <Route path='/' 
             element={<Navigate to="/home"/>}/>

            <Route path='/home'
            element={<HomePage/>}/>
            

           
            <Route path='/dashboard'
            element={<DashBoard recentSearch={recentSearch} setRecentSearch={setRecentSearch}/>}/>
         <Route path='/profile'
         element={<Profile recentSearch={recentSearch}/>}/>
           
           <Route path='/aboutus'
           element={<AboutUs/>}/>
          </Routes>
          
          
      </>
  )
}

export default App

      