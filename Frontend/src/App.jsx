import React from 'react'
import { Route , Routes} from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
