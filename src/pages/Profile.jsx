import RecentSearches from "../components/RecentSearches";

import { FaUserCircle } from 'react-icons/fa'


export default function Profile({recentSearch}){
     
    return(

     
  <div className="w-screen min-h-screen bg-gradient-to-br from-[#ff8177] to-[#b12a5b] flex flex-col items-center justify-start p-6 gap-6">
       <FaUserCircle className="h-16 w-16 text-black/60 mt-20" />
       <p className="text-orange-900 text-2xl font-bold  md:text-3xl"style={{ textShadow: "0 0 5px white, 0 0 20px white" }}>Guest User</p>
      <div className="bg-black/5 border border-white/20  backdrop-blur-sm rounded-3xl p-6 text-white w-full max-w-sm shadow-xl ">
         <RecentSearches recentSearch={recentSearch} />
      </div>
    </div>

    )
    
    
    }