import { useNavigate } from "react-router-dom"
export default function SearchBar({search,setSearch}){

   const navigate=useNavigate()
   const handleSubmit=(e)=>{
     e.preventDefault()
    if (!search.trim()) return
    navigate(`/weatherpage?city=${search}`)
   }

    return(
        <form  onSubmit={handleSubmit}  className="flex justify-center items-center gap-4">
        <input 
        className="p-4 w-96 h-10 border border-grey-300 rounded-lg bg-[rgba(255,255,255,0.15)] text-white "
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
         type="text"
         placeholder="Search Weather" 
         />
         <button type="submit" className="bg-cyan-400 backdrop-blur-md border border-white/30 w-36 px-4 py-1.5 rounded-md text-grey-300 ">search</button>
         </form>

    )
}