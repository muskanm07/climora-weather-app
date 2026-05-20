export default function SearchBar({search,setSearch,handleSearch}){

    return(
        <div className="searchBar">
        <input 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
         type="text"
         placeholder="Search Weather" 
         />
         <button onClick={handleSearch}>search</button>
         </div>

    )
}