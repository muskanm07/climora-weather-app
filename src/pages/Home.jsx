
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'
 
export default function HomePage(){
        const [search, setSearch] = useState("")

    return(
          <>
         
        <div className="p-4 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a5f]  flex flex-col items-center justify-start  pt-24 gap-6">
        <SearchBar search={search} setSearch={setSearch}/>
        <main className="flex flex-col pt-8">
            
            <h2 className="text-cyan-500 text-center font-bold text-2xl md:text-5xl ">WELCOME TO CLIMORA</h2>
            <h3 className="text-white font-medium text-center text-xl px-8 pt-4 md:text-3xl">Fast, accurate, and beautiful weather updates powered by real-time data.</h3>
        </main>
        </div>
        </>
    )
}