import axios from "axios"
import { ActivateUserData, AuthResponseData, LoginUserData, RegisterUserData } from "../../../types/auth.interface"

const BASE_URL = import.meta.env.VITE_API_URL || " "
const REGISTER_URL = "v1/users/"
const LOGIN_URL = "v1/auth/jwt/create/"
const ACTIVATE_URL = "v1/auth/users/activation/"


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

    const response = await axios.post(`${BASE_URL}/${LOGIN_URL}`, userData, config);
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

    const response = await axios.post(`${BASE_URL}/${ACTIVATE_URL}`, userData, config);
    return response.data
}

const authService = {login, logout, register, activate}
export default authService