


export default function RecentSearches({recentSearch}) {

     
    
    return(
         <>
         <ul >
            <h2 className="font-bold text-center text-2xl text-cyan-500 pb-4"> Search History</h2>
         {recentSearch.map((item,idx)=>(
             <div className="border-t  border-white/30 py-2">
             <li key={idx} className="text-white text-md font-normal text-center pt-1 md:text-lg ">{item}</li>
             </div>
             ))}
          </ul>
          
         </>
    )
}