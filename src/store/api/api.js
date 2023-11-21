import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['Coffee', 'Drip', 'Merch', 'Lemonade', 'Slider', 'Sub', 'Sticker'],
    endpoints: (builder) =>({
        getAllCoffee: builder.query({
            query: ()=>'coffee',
            providesTags:(result) =>
            result
            ?   [
                    ...result.map(cofe=> ({type: 'Coffee', id: cofe._id})),
                    {type: 'Coffee', id: 'LIST-COFFEE'},
                    {type: 'Coffee', id: 'PARTIAL-COFFEE'},
                ]
            :   [
                    {type: 'Coffee', id: 'LIST-COFFEE'},
                    {type: 'Coffee', id: 'PARTIAL-COFFEE'},
                ],
        }),
        getAllAdminCoffee:builder.query({
            query:()=>({
                url: 'coffee/all',                
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }                
            }),
            providesTags:(result) =>
            result
            ?   [
                    ...result.map(cofe=> ({type: 'Coffee', id: cofe._id})),
                    {type: 'Coffee', id: 'LIST-COFFEE'},
                    {type: 'Coffee', id: 'PARTIAL-COFFEE'},
                ]
            :   [
                    {type: 'Coffee', id: 'LIST-COFFEE'},
                    {type: 'Coffee', id: 'PARTIAL-COFFEE'},
                ],

        }),        
        getCoffee: builder.query({
            query: ({id}) => `/coffee/${id}`,
            providesTags:(result, error, id) => [{type: 'Coffee', id}],
        }),
        createCoffee: builder.mutation({
            query:coffee=>({
                body: coffee,
                url: '/coffee',
                method: 'POST',
                headers:{                    
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Coffee', id: 'LIST-COFFEE'}],
        }),
        deleteCoffee: builder.mutation({
            query: (id)=> ({
                url: `/coffee/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Coffee', id: 'PARTIAL-COFFEE'}]
        }),
        udateCoffee: builder.mutation({
            query:({id, formData})=>({
                url:`/coffee/${id}`,
                method: 'PUT',
                body: formData,
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:(result, error, arg)=> [{type: 'Coffee', id: arg._id}],
        })    
    })
})

export const {useGetCoffeeQuery, useGetAllCoffeeQuery, useCreateCoffeeMutation, useDeleteCoffeeMutation, useUdateCoffeeMutation, useGetAllAdminCoffeeQuery} = api;
