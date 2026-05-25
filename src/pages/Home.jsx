import SearchBar from '../components/SearchBar'
export default function HomePage(){
     
    return(
          
        <div className="home">
          
        <nav className="navbar">
           <h3 className='logo'>CLIMORA</h3>
            <ul>  
            <li>HOME </li>
            <li>DASHBOARD</li>
            <li>PROFILE</li>
            <li>ABOUT US</li>
         </ul>
        </nav>
        <SearchBar />
        <main className="hero">
            <h2>WELCOME TO CLIMORA</h2>
            <h3 className="para">where you can search weather in your own space</h3>
        </main>
        </div>
    )
}