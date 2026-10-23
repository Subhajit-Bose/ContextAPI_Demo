import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'



function App() {
  return (
    <div style={{minHeight: '100vh',background: '#f0fdfa',padding: '30px 16px',boxSizing: 'border-box',}}>

      <UserContextProvider>

        <h1 style={{textAlign: 'center',color: '#115e59',fontSize: '26px',marginBottom: '8px',}}>
          Context API Demo
        </h1>

        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}



export default App
