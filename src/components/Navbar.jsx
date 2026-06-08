import { Link } from "react-router-dom"

export default function NavBar(){

    return(
         <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap md:mr-4 px-6 py-4 justify-between items-center  bg-[#0F172A] backdrop-blur-md">
            <div className="flex items-center gap-2">
                   <h3 className="text-lg font-bold bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent tracking-widest md:text-3xl"
                 
                style={{ fontFamily: "Michroma" }}>CLIMORA</h3>
                   </div>
                    <ul className="flex flex-wrap gap-6 mt-2 md:gap-6 text-white "> 

                    <li>
                                <Link to="/home" className="text-white hover:text-pink-300">Home</Link>
                               

                 </li>
                 
                    <li>
                                  <Link to="/dashboard" className="text-white hover:text-pink-300">Dashboard</Link>
        
                    </li>
                    <li>
                                  <Link to="/profile" className="text-white hover:text-pink-300">Profile</Link>
        
                    </li>
                    <li>
                                  <Link to="/aboutus" className="text-white hover:text-pink-300">About Us</Link>
        
                    </li>
                 </ul>
                </nav>
    )
}