import BGVideo from "../assets/855437-hd_1920_1080_25fps.mp4"
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'
 
export default function HomePage(){
        const [search, setSearch] = useState("")

    return(
          <>
         
        <div className="relative min-h-screen  overflow-hidden flex flex-col items-center justify-start pt-28 gap-6 opacity-90">
            <video 
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover "
            >
           <source src={BGVideo} type="video/mp4" />
            </video>
            <div className="relative z-10 flex flex-col items-center gap-6 w-full">
        
        <main className="flex flex-col pt-8 ">
            <h1 className="text-center mt-16">
            <span className=" font-bold text-xl text-white tracking-widest drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] md:text-5xl" style={{fontFamily:"Cinzel"}}>WELCOME TO</span>
             <span className="font-bold text-xl text-cyan-400 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] md:text-5xl" style={{fontFamily:"Cinzel"}}> CLIMORA</span>
             </h1>
            <h3 className="px-20 py-6 text-center text-orange-900 drop-shadow-[0_8px_25px_rgba(256,256,256,0.9)] font-bold text-lg tracking-wide  md:text-3xl px-12 lg:px-32" style={{fontFamily:"Sora"}} style={{ textShadow: "0 0 10px white, 0 0 20px white" }}>Fast, accurate, and beautiful weather updates powered by real-time data.</h3>
            <SearchBar search={search} setSearch={setSearch}/>
        </main>
        
        </div>
        </div>
        </>
    )
}