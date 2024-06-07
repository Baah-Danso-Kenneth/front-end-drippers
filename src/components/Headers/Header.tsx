import Logo from '../../assets/logo/text-img.png';
import {BiSearch} from "react-icons/bi"
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/features/customHooks';
import { logout, reset } from '../../redux/features/auth/authSlice';
import BaseHeaderConent from './BaseHeaderConent';


function Header() {

  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  const {user} = useAppSelector((state)=>state.auth)

  const logoutUser=()=>{
    dispatch(logout());
    dispatch(reset())
    navigate("/")
  }


  return (
    <div>
    <div className='bg-[#2D2D2D] h-20 text-[#fff] flex items-center justify-between px-10'>

      <Link to="/">
        <img className="w-20 object-contain"src={Logo} alt="default-logo" />
      </Link>

      <div className='flex space-x-20'>
          <Link to="/welcome/drip/men">women</Link>
            <Link to="/welcome/drip/women">Men</Link>
            <Link to="/welcome/drip/kids">Kidss</Link>
      </div>

      <div className='items-center flex border rounded-full p-1 w-6/12 bg-[#fff] '>
          <input className='outline-none border-none bg-transparent flex-grow ml-3 p-2'placeholder='search for style' type='text'/>
        <BiSearch className='text-[#000] mr-3 text-2xl' />
      </div>

      {user ? (
        <div className='flex items-center justify-between space-x-5 text-3xl'>
          <CiUser />
          <CiHeart/>
        <HiOutlineShoppingBag/>
        </div>
      ): <h1>upness</h1>}
    </div>

     <BaseHeaderConent/>
    </div>
  )
}

export default Header