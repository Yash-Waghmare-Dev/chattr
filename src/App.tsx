import React, { useState } from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import './App.css'

function App() {
  const [sendData, setSendData] = useState("")
  return (
    <>
    
      <div>
        <p>{sendData}</p>
        <Login  send={setSendData}/>
      </div>

    <div>
      <Registration />
    </div>
    
    </>
  )
}

export default App
