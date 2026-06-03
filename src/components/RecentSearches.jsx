
export default function RecentSearches({ recentSearch = [] }) {


     
    return(
         <>
         <ul >
         {recentSearch.map((item,idx)=>(
             <li key={idx} style={{color:"#e2e8f0", listStyleType:"circle"}}  typeof="circle">{item}</li>
             ))}
          </ul>
          
         </>
    )
}