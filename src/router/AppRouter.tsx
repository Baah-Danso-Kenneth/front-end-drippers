import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="drip" replace/>}/>
        <Route path="drip" element={<LandingPage/>}/>
    </Routes>
  )
}

export default AppRouter