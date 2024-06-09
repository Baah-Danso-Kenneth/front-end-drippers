import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from '../pages/EntryPages/LandingPage'
import InformationPage from '../pages/EntryPages/InformationPage'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'

import WelcomePage from '../pages/EntryPages/WelcomePage'
import PageNotFound from '../components/PageNotFound'
import ActivateAccount from '../pages/Auth/ActivateAccount'
import PasswordResetRequest from '../pages/Auth/PasswordResetRequest'
import PasswordResetConfirm from '../pages/Auth/PasswordResetConfirm'
import ProfileSelection from '../pages/Profile/ProfileSelection'
import WomenPage from '../pages/CategoryPages/WomenPage'

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
            <Route path="women" element={<WomenPage/>}/>
            <Route path="men" element={<h1>men</h1>}/>
            <Route path="kids" element={<h1>kids</h1>}/>
        </Route>
        
        <Route path='/select-profile' element={<ProfileSelection/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default AppRouter
