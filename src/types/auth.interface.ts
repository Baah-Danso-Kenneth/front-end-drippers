import { AxiosInstance } from "axios";

export interface User{
    username: string;
    first_name: string;
    last_name: string;
}

export interface RegisterUserData{
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    re_password: string
}

export interface LoginUserData{
    email: string;
    password: string;
}

export interface ActivateUserData{
    uid: string;
    token: string;
}

export interface AuthResponseData{
    user: User;
    access: string;
    refresh: string;
    [key: string]: unknown;
}

export interface AxiosError{
    reponse? : {
        data?: {
            message?: string;
        };
    };
    message:string;
}


export function isAxiosError(error: unknown): error is AxiosInstance{
    return (error as AxiosError).message !== undefined
}

export interface AuthState{
    user: User | null;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    message: string;
}