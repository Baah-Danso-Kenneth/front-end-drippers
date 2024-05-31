import axios from "axios"
import { ActivateUserData, AuthResponseData, LoginUserData, PasswordReset, RegisterUserData } from "../../../types/auth.interface"

const BASE_URL = import.meta.env.VITE_API_URL || " "
const REGISTER_URL = "v1/auth/users/"
const LOGIN_URL = "v1/auth/jwt/create/"
const ACTIVATE_URL = "v1/auth/users/activation/"
const RESET_PASSWORD_URL = "v1/auth/users/reset_password/"
const RESET_PASSWORD_CONFIRM_URL = "v1/auth/users/reset_password_confirm/"


const register = async(userData:RegisterUserData): Promise<AuthResponseData>=>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await axios.post(`${BASE_URL}${REGISTER_URL}`, userData, config);
    return response.data
}

const login = async(userData:LoginUserData): Promise<AuthResponseData>=>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await axios.post(`${BASE_URL}${LOGIN_URL}`, userData, config);
    if (response.data){
        localStorage.setItem("User",JSON.stringify(response.data))
    }

    return response.data;
}

const logout =():void=>{
    localStorage.removeItem("User")
}

const activate=async(userData:ActivateUserData):Promise<AuthResponseData>=>{
    const config = {
        headers:{
            "Content-Type":"application/json"
        },
    };

    const response = await axios.post(`${BASE_URL}${ACTIVATE_URL}`, userData, config);
    return response.data
}

const resetPassword = async(userData:{email: string}): Promise<void>=>{
    const config={
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = await axios.post(`${BASE_URL}${RESET_PASSWORD_URL}`, userData, config)
    return response.data

}

const confirmPassword = async(userData:PasswordReset):Promise<void>=>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await axios.post(`${BASE_URL}${RESET_PASSWORD_CONFIRM_URL}`,userData, config)
    return response.data
}



const authService = {login, logout, register, activate, resetPassword, confirmPassword}
export default authService