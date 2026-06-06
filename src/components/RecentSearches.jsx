


export default function RecentSearches({recentSearch}) {

     
    
    return(
         <>
         <ul >
            <h2 className="font-bold text-center text-2xl text-cyan-500 pb-4"> Search History</h2>
         {recentSearch.map((item,idx)=>(
             <li key={idx} className="text-white font-medium text-xl text-center pt-1  ">{item}</li>
             ))}
          </ul>
          
         </>
    )
}