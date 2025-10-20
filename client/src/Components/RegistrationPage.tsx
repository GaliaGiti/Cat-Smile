import axios from "axios"
import { useState } from "react"



const RegistrationPage = () => {

  const [firstName, setFirstName] = useState()
  const [lastName, setLastNme] = useState()
  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [confirmPass, setConfirmPasss] = useState()

  const handleClick = (e)=>{
    e.preventDefault()
    axios.post('http://loclhost:7000/registration ', {firstName,lastName, username, email, pass, confirmPass})
    .then((result)=> console.log(result))
    .catch((err)=> console.log(err))
  }
  
  
  return (
      
      <>
        <h2>Enter Your Information</h2>
      
      <form className="form" onSubmit={handleClick}  >
      <input type="text" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" onChange={(e)=> setLastNme(e.target.value)}  />
        <input type="text" placeholder="Username" onChange={(e)=> setUserName(e.target.value)}  />
        <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
        <input type="Password" placeholder="Password" pattern=".{8}" required onChange={(e)=> setPass(e.target.value)} />
        <input type="Password" placeholder="Confirm Password" pattern=".{8}" required  onChange={(e)=> setConfirmPasss(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      
      
        
        
    
  
      </>

    
    
    
  )
}

export default RegistrationPage