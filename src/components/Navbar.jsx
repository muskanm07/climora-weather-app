import { Link } from "react-router-dom"

export default function NavBar(){

    return(
         <nav className="navbar">
                   <h3 className='logo'>CLIMORA</h3>
                    <ul>  
                    <li>
                                <Link to="/home">Home</Link>
                 </li>
                    <li>
                                  <Link to="/weatherpage">Dashboard</Link>
        
                    </li>
                    <li>
                                  <Link to="/profile">Profile</Link>
        
                    </li>
                    <li>
                                  <Link to="/aboutus">About Us</Link>
        
                    </li>
                 </ul>
                </nav>
    )
}