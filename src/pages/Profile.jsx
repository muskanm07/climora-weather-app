import RecentSearches from "../components/RecentSearches";


export default function Profile({recentSearch}){
     
    return(

     
  <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex flex-col items-center justify-start p-6 gap-6">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white w-full max-w-sm shadow-xl mt-16">
         <RecentSearches recentSearch={recentSearch} />
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white w-full max-w-sm shadow-xl">paris</div>
      
     </div>
    

    )
    
    
    }