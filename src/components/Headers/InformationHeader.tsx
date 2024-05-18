import { CiHeart } from "react-icons/ci";
import Logo from '../../assets/logo/base-logo.png';
import { Link } from "react-router-dom";
function InformativeHeader() {
  return (
    <div>
        <div className="flex mx-20 pt-5 justify-between items-center">
        <div className="flex space-x-5">
            <h3>womenswear</h3>
            <h3>Menswear</h3>
            <h3>Kidsswear</h3>
        </div>

        <Link to="/">
            <img className="w-[40%]  object-contain" src={Logo} alt="base-img" />
        </Link>

        <div className="flex items-center space-x-5">
            <h3>English</h3>
            <h3>login</h3>
            <CiHeart className="text-2xl"/>
        </div>
        </div>
    </div>
  )
}

export default InformativeHeader