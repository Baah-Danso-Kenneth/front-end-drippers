import { CategoryProps } from "./regular.interface";

export interface StylesProps {
    id: number;
    title: string;
    categories: CategoryProps[];
    
}

export interface StylesStateProps {
    allStyles: StylesProps[];
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string;
}