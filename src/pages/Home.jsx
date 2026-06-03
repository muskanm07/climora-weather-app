import SearchBar from '../components/SearchBar'
 
export default function HomePage(){
     
    return(
          
        <div className="home">
          
       
        <SearchBar />
        <main className="hero">
            <h1 className="text-3xl font-bold text-blue-500">Tailwind works!</h1>
            <h2>WELCOME TO CLIMORA</h2>
            <h3 className="para">where you can search weather in your own space</h3>
        </main>
        </div>
    )
}