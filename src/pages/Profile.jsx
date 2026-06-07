import RecentSearches from "../components/RecentSearches";

import { FaUserCircle } from 'react-icons/fa'


export default function Profile({recentSearch}){
     
    return(

     
  <div className="w-screen min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex flex-col items-center justify-start p-6 gap-6">
       <FaUserCircle className="h-16 w-16 text-white/30" />
       <p className="text-white text-2xl font-medium">Guest User</p>
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white w-full max-w-sm shadow-xl mt-6">
         <RecentSearches recentSearch={recentSearch} />
      </div>
    </div>

    )
    
    
    }