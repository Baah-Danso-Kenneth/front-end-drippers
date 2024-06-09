import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { stylesApi } from "../RTKQueries/FashionStyle/styleApi";
import { fashionApi } from "../RTKQueries/FashionStyle/fashionInspo";


export const store = configureStore({
    reducer: {
      auth: authReducer,
      [stylesApi.reducerPath]: stylesApi.reducer,
      [fashionApi.reducerPath]: fashionApi.reducer
       
    },
    middleware: (getDefaultMiddleware)=>
      getDefaultMiddleware().concat(stylesApi.middleware, fashionApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
