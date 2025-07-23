import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (
    <>
    <div className='dark'>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Homepage/>} />
             <Route path='/signup' element={<Signup/>} />
             <Route path='/signin' element={<Signin/>} />
           </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
