import { Link } from "react-router-dom"
import Layout from "../../components/shared/Layout"
import NewsLetters from "../../components/NewsLetters"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


function Register() {
  return (
    <Layout>
        <div className="flex justify-center items-center  pt-32 pb-32">
            <div className="flex flex-col space-y-4">

            <div className="">
                <h1 className="poppins-extrabold text-4xl capitalize">Create Account</h1>
            </div>

            <div className="border w-full h-10 flex items-center ">
                <input className="border-none outline-none pl-2" type="email" placeholder="email" />
            </div>

            <div className="border w-full h-10 flex items-center">
                <input className="border-none outline-none pl-2" type="password" placeholder="password" />
            </div>

            <div className="border w-full h-10">
                <input className="border-none outline-none pl-2" type="password" placeholder="password" />
            </div>

            <div className="border w-full h-10">
                <input className="border-none outline-none pl-2" type="password" placeholder="password" />
            </div>



            <div className="border bg-slate-700 w-full p-1 h-10 text-white text-center">
                <button className="uppercase">create</button>
            </div>

            <Link className="flex justify-center items-center"to="/drip/login">
                <p>Already have an account?</p>
            </Link>

            <p>By submitting my information I agree to the <Link to="/">Terms and conditions</Link></p>



           <div>
              <p>or sign in with ......</p>

              <div className="grid grid-cols-3 gap-5">
                <div className="flex justify-between items-center border p-2 ">
                    <FcGoogle/>
                    <button className="ml-3">Google</button>
                </div>

                <div className="flex justify-between items-center border p-2">
                    <FaFacebook/>
                    <button className="ml-3">twitter</button>
                </div>

                <div className="flex justify-between items-center border p-2">
                    <BsTwitterX/>
                    <button className="ml-3">facebook</button>
                </div>
              </div>
           </div>
            </div>
            
        </div>

        <div className="mx-20 pb-10">
            <NewsLetters/>
        </div>
    </Layout>
  )
}

export default Register