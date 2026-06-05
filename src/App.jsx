
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import WeatherPage from './pages/WeatherPage'
import HomePage from './pages/Home'
import Profile from './pages/Profile'
import NavBar from './components/Navbar'
import LoginForm from './pages/Login'

function App() {
  
    
  return (
          <>
          <NavBar/>
          <Routes>
            <Route path='/home'
            element={<HomePage/>}/>
            
            <Route path='/login'
            element={<LoginForm/>}/>

           
            <Route path='/weatherpage'
            element={<WeatherPage/>}/>
         <Route path='/profile'
         element={<Profile/>}/>
           
          </Routes>
          
          
      </>
  )
}

export default App

      