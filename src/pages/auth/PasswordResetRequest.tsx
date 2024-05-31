import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/features/customHooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, resetPassword } from "../../redux/features/auth/authSlice";
import Layout from "../../components/shared/Layout";


function PasswordResetRequest() {
    const [email, setEmail]=useState<string>('');
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {isLoading, isSuccess, message, isError} = useAppSelector((state)=>state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess){
            toast.success("A link has being provided to your email to reset your password")
        }
        dispatch(reset())
    },[dispatch, navigate, isLoading, isSuccess, message, isError])


    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(resetPassword({email}))
    }

  return (
    <div>
         <Layout>
            <div className="flex justify-center items-center pt-32 pb-32">
                <div className="flex flex-col space-y-4">
                    <div className="">
                        <h1 className="poppins-extrabold text-4xl capitalize">Request Password Reset</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="border w-full h-10 flex items-center">
                            <input 
                                type="email" 
                                name="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Email" 
                                required 
                            />
                        </div>
                        <div className="border bg-slate-700 w-full p-1 h-10 text-white text-center">
                            <button className="uppercase">Request Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default PasswordResetRequest