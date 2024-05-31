import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import InformationPage from '../pages/InformationPage'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

import WelcomePage from '../pages/WelcomePage'
import PageNotFound from '../components/PageNotFound'
import ActivateAccount from '../pages/ActivateAccount'
import PasswordResetRequest from '../pages/auth/PasswordResetRequest'
import PasswordResetConfirm from '../pages/auth/PasswordResetConfirm'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="drip" replace/>}/>
        <Route path="/drip" element={<LandingPage/>}/>
        <Route path="/drip/information" element={<InformationPage/>}/>
    
         {/* Authentication */}
        <Route path="/drip/login" element={<Login/>}/>
        <Route path="/drip/register" element={<Register/>}/>
        <Route path="/drip/request-password-reset" element={<PasswordResetRequest/>}/>
        <Route path="/password/reset/confirm/:uid/:token" element={<PasswordResetConfirm/>}/>
        <Route path="/activate/:uid/:token" element={<ActivateAccount/>}/>


        <Route path="/welcome/drip" element={<WelcomePage/>}>
            <Route path="women" element={<h1>women</h1>}/>
            <Route path="men" element={<h1>men</h1>}/>
            <Route path="kids" element={<h1>kids</h1>}/>
        </Route>
        
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default AppRouter