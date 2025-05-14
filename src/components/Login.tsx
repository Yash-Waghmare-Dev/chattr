import React from 'react'
import { useState } from 'react'


const Login = ({send}) => {


     const [nameData, setNameData] = useState({
        username: '',
        password: ''
      })
    
      const [jsonData, setJsonData] = useState("");
      
      const handleChange = (e) => {
        setNameData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }))
      }
    
      const handleSubmitLogin = () =>{
        setJsonData(JSON.stringify(nameData))
      }

      const SendData = () => {
        send(jsonData)
      }

      

  return (
    <div>
    <div>
      <h1>Login</h1>
    <p>Name :{nameData.username}</p>
    <input type="text" className='input-value' name='username' placeholder="Enter your Name" onChange={handleChange}/>

    <p>Password : {nameData.password}</p>
    <input type="password" className='input-value' name='password' placeholder="Enter your Password" onChange={handleChange}/>
    <br></br>
    <button className='btn' onClick={() => setNameData({ username: '', password: '' })}>Reset</button>
    <button className='btn' onClick={handleSubmitLogin}>Submit</button>
    <button className='btn' onClick={SendData}>Submiit</button>

    <p>{jsonData}</p>
    </div>

    </div>
  )
}

export default Login