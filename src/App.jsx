import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <>
    <div className='bg-gray-500/40 dark dark:bg-black/90 '>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Homepage/>} />
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
