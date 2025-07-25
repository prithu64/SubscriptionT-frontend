import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'
import { DarkThemeContext } from './contexts/DarkThemeContext'
import { useState } from 'react'




function App() {

  const [isDark,setIsDark] = useState("dark")
 
  return (
     <DarkThemeContext.Provider value={{isDark,setIsDark}}>
        <div className={`${isDark}`}>
          <BrowserRouter >
             <Routes>
               <Route path='/' element={<Landing/>} />
               <Route path='/signup' element={<Signup/>} />
               <Route path='/signin' element={<Signin/>} />
               <Route path='/forgotpassword' element={<ForgotPassword/>} />
             </Routes>
          </BrowserRouter>
      </div>
    </DarkThemeContext.Provider>
      
  
    
   
    
  )
}

export default App
