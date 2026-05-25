
export default function SearchBar({search,setSearch,handleSearch}){


    return(
        <form  onSubmit={handleSearch}  className="searchBar">
        <input 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
         type="text"
         placeholder="Search Weather" 
         />
         <button type="submit">search</button>
         </form>

    )
}