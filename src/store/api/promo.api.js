<<<<<<< HEAD
import { api } from "./api";

export const promoApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getAllPromo:builder.query({
            query:()=>({
                url: '/promo',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            providesTags: (result)=>
            result
            ?   [
                    ...result.map(promo=>({type: 'Promo', id: promo._id})),
                    {type: 'Promo', id: 'LIST-PROMO'},                    
                    {type: 'Promo', id: 'PARTIAL-PROMO'},                    
                ]
            :   [
                    {type: 'Promo', id: 'LIST-PROMO'},                    
                    {type: 'Promo', id: 'PARTIAL-PROMO'}, 
                ]
        }),
        createPromo:builder.mutation({
            query:promo=>({
                body: promo,
                url:'/promo',
                method: 'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Promo', id: 'LIST-PROMO'}],
        }),
        deletePromo: builder.mutation({
            query:(id)=>({
                url: `/promo/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Promo', id: 'PARTIAL-PROMO'}]
        })
    })
})

export const {
    useGetAllPromoQuery,
    useCreatePromoMutation,
    useDeletePromoMutation
=======
import { api } from "./api";

export const promoApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getAllPromo:builder.query({
            query:()=>({
                url: '/promo',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            providesTags: (result)=>
            result
            ?   [
                    ...result.map(promo=>({type: 'Promo', id: promo._id})),
                    {type: 'Promo', id: 'LIST-PROMO'},                    
                    {type: 'Promo', id: 'PARTIAL-PROMO'},                    
                ]
            :   [
                    {type: 'Promo', id: 'LIST-PROMO'},                    
                    {type: 'Promo', id: 'PARTIAL-PROMO'}, 
                ]
        }),
        createPromo:builder.mutation({
            query:promo=>({
                body: promo,
                url:'/promo',
                method: 'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Promo', id: 'LIST-PROMO'}],
        }),
        deletePromo: builder.mutation({
            query:(id)=>({
                url: `/promo/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Promo', id: 'PARTIAL-PROMO'}]
        })
    })
})

export const {
    useGetAllPromoQuery,
    useCreatePromoMutation,
    useDeletePromoMutation
>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
} = promoApi;