import { CategoryProps } from "./regular.interface";

export interface StylesProps {
    id: number;
    title: string;
    categories: CategoryProps;
    
}

export interface StylesStateProps {
    allStyles: StylesProps[];
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string;
    
}
export interface Style {
  id: number;
  title: string;
  category: CategoryProps;
  style_image: string | null;
}


export interface Image {
  id: number;
  front_image: string;
  back_image: string;
  caption: string | null;
}

// Define the structure for the main data object
export interface FashionItem {
  id: string;
  title: string;
  description: string;
  styles: Style;
  images: Image[];
  tags: string;
  likes_count: number;
  average_rating: number;
}

