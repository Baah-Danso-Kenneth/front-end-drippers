import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/shared/Layout"
import NewsLetters from "../../components/NewsLetters"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { FormState } from "../../types/regular.interface";
import { useAppDispatch, useAppSelector} from "../../redux/features/customHooks";
import { RootState } from "../../redux/app/store";
import { toast } from "react-toastify";
import { register, reset } from "../../redux/features/auth/authSlice";


function Register() {
    const [form, setForm]=useState<FormState>({
        username: '',
        first_name: '',
        last_name:'',
        about_me:'',
        email: '',
        password: '',
        re_Password: '',
    })
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user, isError, message, isSuccess } = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            toast.success("Activate your account visit your email")
            navigate(`/activate/account/:uid/:token`);
        }
        dispatch(reset());
    }, [isError, isSuccess, message, navigate, user, dispatch]);

    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev: FormState) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(form.password !== form.re_password){
            toast.error("Passwords donot match")
        }
        else{
            const userData = {
                username: form.username,
                first_name: form.first_name,
                last_name: form.last_name,
                email: form.email,
                password: form.password,
                re_password: form.re_password
            };

            dispatch(register(userData))

        }
    };

  return (
    <Layout>
        <div className="flex justify-center items-center  pt-32 pb-32">
            <div className="flex flex-col space-y-4">

            <div className="">
                <h1 className="poppins-extrabold text-4xl capitalize">Create Account</h1>
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>

            <div className="border w-full h-10 flex items-center ">
                <input
                 className="border-none outline-none pl-2"
                 value={form.username || ''}
                 onChange={handleInputChange}
                 name="username" 
                 type="text"
                 placeholder="Enter Username"
                />
            </div>

            <div className="border w-full h-10 flex items-center">
            <input
                 className="border-none outline-none pl-2"
                 value={form.first_name || ''}
                 onChange={handleInputChange}
                 name="first_name" 
                 type="text"
                 placeholder="Enter first name"
                />
            </div>

            <div className="border w-full h-10">
            <input
                 className="border-none outline-none pl-2"
                 value={form.last_name || ''}
                 onChange={handleInputChange}
                 name="last_name" 
                 type="text"
                 placeholder="Enter lastname"
                />
            </div>

            <div className="border w-full h-10">
            <input
                 className="border-none outline-none pl-2"
                 value={form.password || ''}
                 onChange={handleInputChange}
                 name="password" 
                 type="password"
                 placeholder="Enter password"
                />
            </div>


            <div className="border w-full h-10">
            <input
                 className="border-none outline-none pl-2"
                 value={form.re_password || ''}
                 onChange={handleInputChange}
                 name="re_password" 
                 type="password"
                 placeholder="Renter enter password"
                />
            </div>



            <div className="border bg-slate-700 w-full p-1 h-10 text-white text-center">
                <button className="uppercase">create</button>
            </div>

            <Link className="flex justify-center items-center"to="/drip/login">
                <p>Already have an account?</p>
            </Link>

            <p>By submitting my information I agree to the <Link to="/">Terms and conditions</Link></p>

            </form>

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

