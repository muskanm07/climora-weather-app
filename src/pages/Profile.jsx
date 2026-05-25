import RecentSearches from "../components/RecentSearches";


export default function Profile({username,LogOut,recentSearch}){
    
    return(

     
     <div className="profile-page">
     
        <div className="user-info">
           {/* {username.map((item,idx)=>(
        <h4 key={idx}>{item}</h4>
           
            ))} */}
            <h4>{username}</h4>
          <p>muskan@GMAIL.COM</p>
          <p>Raebareli</p>
       
      </div>
      <div className="recent-search-card">
         <RecentSearches recentSearch={recentSearch}/>
      </div>
      <div className="favourites-card"></div>
      <div className="setting-card">
        <button onClick={LogOut}>Log out</button>
      </div>
     </div>
    

    )
    
    
    }