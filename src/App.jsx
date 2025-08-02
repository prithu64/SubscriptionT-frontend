import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'
import { DarkThemeContext } from './contexts/DarkThemeContext'
import { useState } from 'react'
import DashBoard from './pages/DashBoard'
import Profile from './pages/Profile'
import EnterOTP from './pages/EnterOTP'
import UpdatePass from './pages/UpdatePass'




function App() {

  const [isDark,setIsDark] = useState("dark")
  const [modal,setModal] = useState(false)
  
  return (

     <DarkThemeContext.Provider value={{isDark,setIsDark,modal,setModal}}>
        <div className={`${isDark}`}>
          <BrowserRouter >
             <Routes>
               <Route path='/' element={<Landing/>} />
               <Route path='/signup' element={<Signup/>} />
               <Route path='/signin' element={<Signin/>} />
               <Route path='/forgotpassword' element={<ForgotPassword/>} />
               <Route path='/dashboard' element={<DashBoard/>}/>
               <Route path='/profile'   element={<Profile/>}/>
               <Route path='/reset/:token'   element={<UpdatePass/>}/>
             </Routes>
          </BrowserRouter>
      </div>
    </DarkThemeContext.Provider>
      
  
    
   
    
  )
}

export default App
