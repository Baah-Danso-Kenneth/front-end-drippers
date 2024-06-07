import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL

export const stylesApi = createApi({
    reducerPath: 'stylesApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder)=>({
        getStyles: builder.query({
            query: ()=> 'v1/styles-category/',
        })
    })
})

export const {useGetStylesQuery} = stylesApi