import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { stylesApi } from "../RTKQueries/FashionStyle/styleApi";


export const store = configureStore({
    reducer: {
      auth: authReducer,
      [stylesApi.reducerPath]: stylesApi.reducer,
       
    },
    middleware: (getDefaultMiddleware)=>
      getDefaultMiddleware().concat(stylesApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
