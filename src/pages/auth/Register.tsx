import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/features/customHooks';
import { RootState } from '../../redux/app/store';
import { register, reset } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { FormState } from "../../types/regular.interface";
import Layout from "../../components/shared/Layout"
import { Link } from 'react-router-dom';

function Register() {
    const initialFormState: FormState = {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        re_password: '',
        password: '',
    };

    const [form, setForm] = useState<FormState>(initialFormState);
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user, isError, message, isSuccess } = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            toast.success("Registration Successful, Check your mail to activate your account");
            navigate("/welcome/drip/women");
        }

        dispatch(reset());
    }, [isError, isSuccess, message, navigate, dispatch, user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.password !== form.re_password) {
            toast.error("Passwords do not match");
        } else {
            const userData = {
                username: form.username!,
                first_name: form.first_name!,
                last_name: form.last_name!,
                email: form.email,
                password: form.password,
                re_password: form.re_password
            };
            dispatch(register(userData));
        }
    };

    return (
        <Layout>
            <div className="flex justify-center items-center pt-32 pb-32">
                <div className="flex flex-col space-y-4">
                    <div className="">
                        <h1 className="poppins-extrabold text-4xl capitalize">Create Account</h1>
                    </div>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="border w-full h-10 flex items-center">
                            <input type="text" name="username" value={form.username} onChange={handleInputChange} placeholder="Username" required />
                        </div>
                        <div className="border w-full h-10 flex items-center">
                            <input type="text" name="first_name" value={form.first_name} onChange={handleInputChange} placeholder="First Name" required />
                        </div>
                        <div className="border w-full h-10">
                            <input type="text" name="last_name" value={form.last_name} onChange={handleInputChange} placeholder="Last Name" required />
                        </div>
                        <div className="border w-full h-10">
                            <input type="email" name="email" value={form.email} onChange={handleInputChange} placeholder="Email" required />
                        </div>
                        <div className="border w-full h-10">
                            <input type="password" name="password" value={form.password} onChange={handleInputChange} placeholder="Password" required />
                        </div>
                        <div className="border w-full h-10">
                            <input type="password" name="re_password" value={form.re_password} onChange={handleInputChange} placeholder="Confirm Password" required />
                        </div>
                        <div className="border bg-slate-700 w-full p-1 h-10 text-white text-center">
                            <button className="uppercase" type="submit">Register</button>
                        </div>
                        <Link className="flex justify-center items-center" to="/drip/login">
                            <p>Already have an account?</p>
                        </Link>
                        <p>By submitting my information I agree to the <Link to="/">Terms and conditions</Link></p>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Register;
