import { useNavigate } from "react-router-dom"
export default function SearchBar({search,setSearch}){

   const navigate=useNavigate()
   const handleSubmit=(e)=>{
     e.preventDefault()
    if (!search.trim()) return
    navigate(`/dashboard?city=${search}`)
   }

    return(
        <form  onSubmit={handleSubmit}  className=" mt-8 flex flex-col md:flex flex-row lg:flex-row justify-center items-center gap-4 px-4 ">
        <input 
        className="p-4 w-[210px] bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 rounded-lg h-9 md:w-[700px] h-12"
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
         type="text"
         placeholder="Search Weather" 
         />
         <button type="submit" className="w-[210px] md:w-20 bg-cyan-400 font-semibold backdrop-blur-md border border-white/30 md:w-36 px-4 py-1.5 rounded-md text-gray-900/80">Search</button>
         </form>

    )
}