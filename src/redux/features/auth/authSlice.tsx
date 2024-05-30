import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";
import { ActivateUserData, AuthResponseData, AuthState, LoginUserData, RegisterUserData, User } from "../../../types/auth.interface";
import { isAxiosError } from "axios";


const userString = localStorage.getItem("User")
const user: User | null  = userString ? JSON.parse(userString) : null

const initialState: AuthState = {
    user: user,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const register = createAsyncThunk<AuthResponseData, RegisterUserData>(
    "auth/register",
    async(userData: RegisterUserData, thunkAPI)=>{
        try {
            return await authService.register(userData)
        } catch (error) {
            let message: string;
            if(isAxiosError(error)){
                message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            }else{
                message= "An error occured concern with registeration"
            }
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout=createAsyncThunk("auth/logout", async()=>{
    authService.logout()
})

export const login = createAsyncThunk<AuthResponseData, LoginUserData>(
    "auth/login",
    async(userData: LoginUserData, thunkAPI)=>{
        try {
            return await authService.login(userData)
        } catch (error) {
            let message: string;
            if(isAxiosError(error)){
                message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            }else{
                message= "An error occured concern with login"
            }
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const activate= createAsyncThunk<AuthResponseData, ActivateUserData>(
    "auth/activate",
    async(userData: ActivateUserData, thunkAPI)=>{
        try {
            return await authService.activate(userData)
        } catch (error) {
            let message: string;
            if(isAxiosError(error)){
                message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            }else{
                message= "An error occured concerning activation of user account"
            }
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload.user;
            })
            .addCase(register.rejected, (state, action) => {
                const payload = action.payload as string | undefined;
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.message = payload || "Unknown error";
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload.user;
                state.message = "Login Successful"
            })
            .addCase(login.rejected, (state, action) => {
                const payload = action.payload as string | undefined;
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.message = payload || "Login Failed";
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(activate.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(activate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.user = action.payload.user;
            })
            .addCase(activate.rejected, (state, action) => {
                const payload = action.payload as string | undefined;
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.message = payload || "Unknown error";
            });
    }
    

});


export const {reset} = authSlice.actions
export default authSlice.reducer;