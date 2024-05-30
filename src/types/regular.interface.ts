import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}


export interface CategoryProps {
    id: number;
    department: string;
    image: string;
}

export interface QuestionProps {
    id:number;
    title: string;
    description: string;
    icons: ReactNode;
}

export interface NewsProps{
    id: number;
    title: string;
    description:string;
    image: string;
    notification: string;
}

export interface FormState{
    email: string;
    re_password: string ;
    password: string;
    username: string;
    first_name: string;
    last_name: string;
}

export interface LoginFormState{
    email: string;
    password: string;
}