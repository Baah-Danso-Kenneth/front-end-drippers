import axios from "axios"
import { ActivateUserData, AuthResponseData, LoginUserData, RegisterUserData } from "../../../types/auth.interface"

const REGISTER_URL = "/api/v1/users/"
const LOGIN_URL = "/api/v1/auth/jwt/create/"
const ACTIVATE_URL = "/api/v1/auth/users/activation/"


const register = async(userData:RegisterUserData): Promise<AuthResponseData>=>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await axios.post(REGISTER_URL, userData, config);
    return response.data
}

const login = async(userData:LoginUserData): Promise<AuthResponseData>=>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await axios.post(LOGIN_URL, userData, config);
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

    const response = await axios.post(ACTIVATE_URL, userData, config);
    return response.data
}

const authService = {login, logout, register, activate}
export default authService