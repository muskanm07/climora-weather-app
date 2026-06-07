import { Link } from "react-router-dom"

export default function NavBar(){

    return(
         <nav className="flex flex-wrap w-full px-4 md:mr-4 px-6 py-4 justify-between items-center px-6 py-4 bg-slate-900">
            <div className="flex items-center gap-2">
                   <h3 className="text-lg  md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-widest"
                 
                style={{ fontFamily: "Michroma" }}>CLIMORA</h3>
                   </div>
                    <ul className="flex flex-wrap gap-6 mt-2 md:gap-6 text-white "> 

                    <li>
                                <Link to="/home">Home</Link>
                               

                 </li>
                 
                    <li>
                                  <Link to="/dashboard">Dashboard</Link>
        
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