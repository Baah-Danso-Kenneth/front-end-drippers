import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import InformationPage from '../pages/InformationPage'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="drip" replace/>}/>
        <Route path="drip" element={<LandingPage/>}/>
        <Route path="/drip/information" element={<InformationPage/>}/>
    </Routes>
  )
}

export default AppRouter