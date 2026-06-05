import { Link } from "react-router-dom"

export default function NavBar(){

    return(
         <nav className="flex justify-between items-center px-6 py-4 bg-slate-900">
            <div className="flex items-center gap-2">
                   <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  className="text-3xl font-bold text-cyan-400"
                style={{ fontFamily: "Orbitron" }}>CLIMORA</h3>
                   </div>
                    <ul className="flex gap-6 text-white"> 

                    <li>
                                <Link to="/home">Home</Link>
                               

                 </li>
                   <li>
                                <Link to="/login">Log In</Link>
                               

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