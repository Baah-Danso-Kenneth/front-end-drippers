import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import InformationPage from '../pages/InformationPage'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/ForgotPassword'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="drip" replace/>}/>
        <Route path="/drip" element={<LandingPage/>}/>
        <Route path="/drip/information" element={<InformationPage/>}/>
    
         {/* Authentication */}
        <Route path="/drip/login" element={<Login/>}/>
        <Route path="/drip/register" element={<Register/>}/>
        <Route path="/drip/forgot-password" element={<ForgotPassword/>}/>

    </Routes>
  )
}

export default AppRouter