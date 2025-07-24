import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <>
    <div className='dark'>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Landing/>} />
             <Route path='/signup' element={<Signup/>} />
             <Route path='/signin' element={<Signin/>} />
             <Route path='/forgotpassword' element={<ForgotPassword/>} />
           </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
