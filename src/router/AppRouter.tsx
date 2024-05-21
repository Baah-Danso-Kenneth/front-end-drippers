import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import InformationPage from '../pages/InformationPage'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/ForgotPassword'
import WelcomePage from '../pages/WelcomePage'

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

        <Route path="/welcome/drip" element={<WelcomePage/>}>
            <Route path="women" element={<h1>women</h1>}/>
            <Route path="men" element={<h1>men</h1>}/>
            <Route path="kids" element={<h1>kids</h1>}/>
        </Route>

    </Routes>
  )
}

export default AppRouter