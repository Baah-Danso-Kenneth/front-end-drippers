import { useNavigate, useParams } from "react-router-dom"
import Layout from "../../components/shared/Layout"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/features/customHooks"
import { toast } from "react-toastify"
import { activate, reset } from "../../redux/features/auth/authSlice"
import { ActivateUserData } from "../../types/auth.interface"


function ActivateAccount() {

    const {uid, token} = useParams<{uid: string; token: string}>();
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
    const {isError, isSuccess, message} = useAppSelector((state)=>state.auth)



    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess) {
            toast.success("Your account was activated! You can login");
            navigate("/welcome/drip/women");
        }

        dispatch(reset());
    }, [isError, isSuccess, navigate, message, dispatch]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (uid && token) {
            const userData: ActivateUserData = { uid, token };
            dispatch(activate(userData));
        } else {
            toast.error("Invalid activation link");
        }
    };

  return (
    <Layout>
        <p>Activation of Account</p>
        <p>Check or mail to confirm activation of the account</p>
        <p>If done now you can click on the activate button below to login and activate you account</p>
        <button type="submit" onClick={handleSubmit}>Activate Account</button>
    </Layout>
  )
}

export default ActivateAccount