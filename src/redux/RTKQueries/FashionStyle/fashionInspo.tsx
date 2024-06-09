import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL

export const fashionApi = createApi({
    reducerPath: 'fashionApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL }),
    endpoints: (builder)=>({
        getFashionInspo: builder.query({
            query: ()=> 'v1/inspo-fashion/',
        })
    })
})


export const {useGetFashionInspoQuery} = fashionApi