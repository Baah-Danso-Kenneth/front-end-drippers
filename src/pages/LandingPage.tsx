import Image from '../assets/welcomeImg/darkish-logo.png';
import BgLogo from '../assets/welcomeImg/choice2.jpg';

import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='bg-cover bg-center h-screen flex justify-center items-center flex-col' style={{ backgroundImage: `url(${BgLogo})` }}>
        <div className='flex justify-center pt-30 '>
            <img className="w-30 h-30 object-cover"src={Image} alt="banner-img" />
          </div>  

          <Link className='border border-white w-3/12 p-1 text-2xl text-white text-center' to="/drippers/information">
            <button className='uppercase'>go</button>
          </Link>
    </div>
  )
}

export default LandingPage