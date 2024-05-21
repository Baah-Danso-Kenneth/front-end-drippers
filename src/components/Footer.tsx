import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";


function Footer() {
  return (
    <div className="bg-[#eee] min-h-auto pt-5">
     <div className="mx-10">

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h1>Customer Service</h1>
          <ul>
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Contact us</li>
            <li>Contact us</li>
            <li>Contact us</li>
            <li>Contact us</li>

          </ul>
        </div>

        <div>
          <h1>About Drippers Fashion Island</h1>
        <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Contact us</li>
            <li>Contact us</li>
          </ul>
          
          <div>

          </div>

        </div>

        <div>
          <h1>Let get Interactive</h1>
        <ul className="space-y-1">
            <li>drippersIsland@gmail.com</li>
            <li>Contact us</li>
            <li>Contact us</li>
          </ul>

          <div className="flex space-x-3 text-[#2d2d2d] text-2xl pt-2">
            <FaSquareInstagram/>
            <FaFacebook/>
            <FaSquareXTwitter/>
            <BsLinkedin/>

          </div>

        </div>
      </div>

      <div>

        <div className="py-5">
          <ul className="grid grid-cols-3 gap-4">
            <li>Privacy policy</li>
            <li>Privacy policy</li>
            <li>Privacy policy</li>

          </ul>
        </div>

        <div className="py-8 border-t border-[#fff]">
          <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, unde! Blanditiis fugit autem animi incidunt impedit laboriosam nam dicta beatae, deleniti quod modi atque sit sapiente molestias quis placeat consequuntur consequatur accusamus, dolorem facere commodi. Delectus nam ullam inventore at?</h6>
        </div>

      </div>
    </div>


    <div className="bg-[#ddd] p-3">
         <div className="mx-10 flex items-center justify-between">
         <h5>&copy;<span>drippersIsland 2024</span></h5>

         <div>
            <ul className="flex items-center space-x-5">
              <li className="border-r border-gray-400  pr-4">privacy & Cookies</li>
              <li className="border-r border-gray-400  pr-4" >Ts&Cs</li>
              <li>Accessibility</li>
            </ul>
         </div>
         </div>
      </div>

    </div>
  )
}

export default Footer