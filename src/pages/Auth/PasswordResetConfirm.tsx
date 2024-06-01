import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/features/customHooks';
import { confirmResetPassword, reset } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import Layout from "../../components/shared/Layout";
import { PasswordReset } from '../../types/auth.interface';


function PasswordResetConfirm() {
    const { uid, token } = useParams<{ uid: string; token: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { isError, isSuccess, message } = useAppSelector((state) => state.auth);

    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess) {
            toast.success("Password reset successful! You can now login.");
            navigate("/login");
        }

        dispatch(reset());
    }, [isError, isSuccess, message, navigate, dispatch]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== rePassword) {
            toast.error("Passwords do not match");
        } else {
            const userData: PasswordReset = { uid: uid as string, token: token as string, new_password: password, re_new_password: password };
            dispatch(confirmResetPassword(userData));
        }
    };

    return (
        <Layout>
            <div className="flex justify-center items-center pt-32 pb-32">
                <div className="flex flex-col space-y-4">
                    <div className="">
                        <h1 className="poppins-extrabold text-4xl capitalize">Reset Password</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="border w-full h-10 flex items-center">
                            <input 
                                type="password" 
                                name="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="New Password" 
                                required 
                            />
                        </div>
                        <div className="border w-full h-10 flex items-center">
                            <input 
                                type="password" 
                                name="rePassword" 
                                value={rePassword} 
                                onChange={(e) => setRePassword(e.target.value)} 
                                placeholder="Confirm New Password" 
                                required 
                            />
                        </div>
                        <div className="border bg-slate-700 w-full p-1 h-10 text-white text-center">
                            <button className="uppercase">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default PasswordResetConfirm;
