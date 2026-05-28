export default function LoginForm({username,setUserName,password,setPassWord,handleFormSubmit,errors}){
   

    return(
       
        <div className="form">
      <h2>Please Login</h2>
      <form onSubmit={handleFormSubmit} className="LoginForm">
      <input type="text" 
          value={username}
          onChange={e=>setUserName(e.target.value)}
          placeholder="username"
          className="login"/>
       {errors.username && <p>{errors.username}</p> }
      <input type="password" 
      value={password}
      onChange={e=>setPassWord(e.target.value)}
      placeholder="password"
      className="login"/>
      {errors.password && <p>{errors.password}</p> }
      <button type="submit" className="login-btn">Log In</button>
   </form>
   </div>
   

    )
}