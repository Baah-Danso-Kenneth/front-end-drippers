import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/shared/Layout";
import NewsLetters from "../../components/NewsLetters";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../redux/features/customHooks";
import { useEffect, useRef, useState } from "react";
import {  LoginFormState } from "../../types/regular.interface";
import { toast } from 'react-toastify';
import { login, reset } from "../../redux/features/auth/authSlice";
import { RootState } from "../../redux/app/store";


function Login() {

    const initialFormState:LoginFormState={
        email: '',
        password: ''
    }

    const [form, setForm] = useState<LoginFormState>(initialFormState);
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user, isError, message, isSuccess } = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            toast.success(message)
            navigate("/welcome/drip/women");
        }
        dispatch(reset());
    }, [isError, isSuccess, message, navigate, user, dispatch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev: LoginFormState) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.email) {
            toast.error("Email is required");
            return;
        }
        if (!form.password) {
            toast.error("Password is required");
            return;
        }

        const userData = {
            email: form.email,
            password: form.password,
        };

        dispatch(login(userData));
    };

    return (
        <Layout>
            <div className="flex justify-center items-center ">
                <div>
                    <p>or sign in with ......</p>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex justify-between items-center border p-2 ">
                            <FcGoogle />
                            <button className="ml-3">Google</button>
                        </div>

                        <div className="flex justify-between items-center border p-2">
                            <FaFacebook />
                            <button className="ml-3">Facebook</button>
                        </div>

                        <div className="flex justify-between items-center border p-2">
                            <BsTwitterX />
                            <button className="ml-3">Twitter</button>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="flex justify-center items-center pt-32 pb-32">
                    <div className="flex flex-col space-y-4">
                        <div className="">
                            <h1 className="poppins-extrabold text-4xl capitalize">Sign In</h1>
                        </div>

                        <div className="border w-full h-10 flex items-center ">
                            <input
                                className="border-none outline-none pl-2"
                                value={form.email || ''}
                                onChange={handleInputChange}
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="border w-full h-10">
                            <input
                                className="border-none outline-none pl-2"
                                value={form.password || ''}
                                onChange={handleInputChange}
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>

                        <div className="border bg-slate-700 w-full p-1 h-10 text-white flex items-center justify-center">
                            <button type="submit" className="uppercase items-center">
                                Sign In
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <p><Link to="/drip/forgot-password">Forgot password?</Link></p>
                            <p><Link to="/drip/register">Don't have an account?</Link></p>
                        </div>
                    </div>
                </div>
            </form>

            <div className="mx-20 pb-10">
                <NewsLetters />
            </div>
        </Layout>
    );
}

export default Login;
