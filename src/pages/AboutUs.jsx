import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function AboutUs(){

    return(
     <div className="w-full  min-h-screen bg-gradient-to-br from-[#ff8177] to-[#b12a5b] flex flex-col  items-center justify-start pt-8 gap-0 md:gap-6 ">
             <div className=" px-8 md:bg-black/10 backdrop-blur-sm rounded-3xl p-8  text-white w-full max-w-5xl mt-12 md:hover:shadow-2xl hover:shadow-grey-900 hover:-translate-y-2 transition-all duration-300">
        <h1 className=" text-2xl text-cyan-400 font-medium text-center md:text-2xl"style={{fontFamily:"Poppins"}}>ABOUT CLIMORA</h1>
        <h2 className="pt-4 tracking-wide text-md text-white font-normal text-center md:text-xl tracking-wide" style={{fontFamily:"Poppins"}}>Climora is a real-time weather app built with React. 
            Search any city and get current weather, 5-day forecast,
             and dynamic visuals that match the conditions.</h2>
             </div>
             <div className=" px-8 md:bg-black/10 backdrop-blur-sm rounded-3xl py-8  text-white w-full max-w-5xl  md:hover:shadow-2xl hover:shadow-grey-900 hover:-translate-y-2 transition-all duration-300">
             <h2 className=" text-2xl font-medium text-cyan-400 text-center  md:text-2xl" style={{fontFamily:"Poppins"}}>TECH STACK</h2>
             <h3 className="p-4 tracking-wide text-md text-white font-normal text-center md:text-xl tracking-wide"style={{fontFamily:"Poppins"}}>React, Tailwind CSS, OpenWeatherMap API, React Router</h3>
             </div>
             <div className="  px-8 md:bg-black/10 backdrop-blur-sm rounded-3xl py-8 text-white w-full max-w-5xl  md:hover:shadow-2xl hover:shadow-grey-900 hover:-translate-y-2 transition-all duration-300">
             <h2 className="text-2xl font-medium text-cyan-400 text-center md:text-2xl" style={{fontFamily:"Poppins"}}>ABOUT DEVELOPER</h2>
             <p className=" pt-4 tracking-wide text-md text-white font-normal text-center  md:text-xl tracking-wide" style={{fontFamily:"Poppins"}}>Hi, I'm Muskan — a frontend developer and dancer based in India. 
                I built Climora to sharpen my React skills while creating 
                something actually useful. Currently open to frontend opportunities.</p>
            </div>
              <footer className="flex justify-center items-center p-8 w-full bg-[#0F172A] sticky top-[100vh]  ">
                <div className="flex justify-center items-center gap-8 md:gap-12 px-16 ">
                <p className="text-white text-sm ">© 2026 Climora  </p>
                <p className="text-white text-sm ">Built by Muskan</p>
                    <a className="text-white text-sm flex justify-center itmes-center gap-2" href="https://github.com/muskanm07" target="_blank"><FaGithub className="h-5 w-5 text-white-500" />GitHub</a>
                     <a className="text-white text-sm flex justify-center itmes-center gap-2" href="https://www.linkedin.com/in/muskan-maurya-1344202b2/" target="_blank"><FaLinkedin className="h-5 w-5 text-white-500" />LinkedIn</a>
    
    
     </div>
     </footer>
     </div>

    )
}