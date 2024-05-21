import { Outlet } from "react-router-dom"
import Layout from "../components/shared/Layout"

function WelcomePage() {
  return (
    <Layout>
        <Outlet/>
    </Layout>
  )
}

export default WelcomePage