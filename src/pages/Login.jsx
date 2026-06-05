import { useState } from "react"


export default function LoginForm(){

          const [isLoggedIn,setIsLoggedIn]=useState(false)
          const [username,setUserName]=useState("")
          const [password,setPassWord]=useState("")
          const [loginError,setLogInError]=useState({})

       
       const handleFormSubmit=(e)=>{
        e.preventDefault()
        const errors={}
        if(!username.trim()){
       
          errors.username="please enter username"
       
       }
       if(!password.trim()){
         errors.password="please enter password"
      }
       if(Object.keys(errors).length>0){
         setLogInError(errors)
         return
       }
          setLogInError({})
          setIsLoggedIn(true)
          setUserName("")
          setPassWord("")
         localStorage.setItem("username",username)
      
    }
    return(
       
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] flex flex-col items-center justify-center p-6 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-white w-full max-w-sm shadow-xl p-20">
      <h1 className="font-bold text-white text-3xl  text-center">Please Login</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col justify-center items-center gap-6">
      <input type="text" 
          value={username}
          onChange={e=>setUserName(e.target.value)}
          placeholder="username"
          className="mt-8 p-4 w-64 h-10 border border-grey-300 rounded-lg bg-[rgba(255,255,255,0.15)]"/>
       {loginError.username && <p>{loginError.username}</p> }
      <input type="password" 
      value={password}
      onChange={e=>setPassWord(e.target.value)}
      placeholder="password"
      className="p-4 w-64 h-10 border border-grey-300 rounded-lg bg-[rgba(255,255,255,0.15)]"/>
      {loginError.password && <p>{loginError.password}</p> }
      <button type="submit" className="bg-cyan-400 backdrop-blur-md border border-white/30 text-white w-64 px-6 py-1 rounded-lg mt-4 shadow-md hover:shadow-xl hover:bg-cyan-500 transition-all duration-300 ">Log In</button>
   </form>
   </div>
   </div>
   

    )
}