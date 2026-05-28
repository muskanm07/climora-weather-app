import SearchBar from '../components/SearchBar'
 
export default function HomePage(){
     
    return(
          
        <div className="home">
          
       
        <SearchBar />
        <main className="hero">
            <h2>WELCOME TO CLIMORA</h2>
            <h3 className="para">where you can search weather in your own space</h3>
        </main>
        </div>
    )
}