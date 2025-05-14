import React from 'react'
import { useState } from 'react'
// import './App.css'

const Registration = () => {

    
      const [regNameData, setRegNameData] = useState({
        regusername: '',
        regpassword: '',
        email: '',
        phone: ''
      })
      const [regJsonData, setRegJsonData] = useState("");

      const handleChange = (e) => {
    setRegNameData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

    
  const handleSubmitReg = () => {
    setRegJsonData(JSON.stringify(regNameData))
  }

  const handleReset = () => {
    setRegNameData({
      regusername: '',
      regpassword: '',
      email: '',
      phone: ''
    })
  }
  
  const handleRR = () => {
    
  }
  
  return (
    <div>
         <div>
      <h1>Registration form</h1>
    <p>UserName : {regNameData.regusername}</p>
    <input type="text" className='input-value' name='regusername' placeholder="Enter your Name" onChange={handleChange}/>
    <p>Password : {regNameData.regpassword}</p> 
    <input type="password" className='input-value' name='regpassword' placeholder="Enter your Password" onChange={handleChange}/>
    <p>Email : {regNameData.email}</p>  
    <input type="email" className='input-value' name='email' placeholder="Enter your Email" onChange={handleChange}/>
    <p>Phone : {regNameData.phone}</p>
    <input type="tel" className='input-value' name='phone' placeholder="Enter your Phone" onChange={handleChange}/>
    <br></br>
    <button className='btn' onClick={handleReset}>Reset</button>
    <button className='btn' onClick={handleSubmitReg}>Submit</button>

    <button onClick={handleRR}>RR</button>
    <p>{regJsonData}</p>
    </div>
    </div>
  )
}

export default Registration