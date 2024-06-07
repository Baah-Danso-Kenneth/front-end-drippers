import { CiHeart } from "react-icons/ci";
import Logo from '../../assets/logo/base-logo.png';
import { Link } from "react-router-dom";
function InformativeHeader() {
  return (
    <div>
        <div className="flex mx-10 pt-5 justify-between items-center">
        <div className="flex space-x-5">
            <Link to="/welcome/drip/men">womenswear</Link>
            <Link to="/welcome/drip/women">Menswear</Link>
            <Link to="/welcome/drip/kids">Kidsswear</Link>
        </div>

        <Link to="/">
            <img className="w-[40%]  object-contain" src={Logo} alt="base-img" />
        </Link>

        <div className="flex items-center space-x-5">
            <h3>English</h3>
            <Link to="/drip/login">login</Link>
            <CiHeart className="text-2xl"/>
        </div>
        </div>
    </div>
  )
}

export default InformativeHeader