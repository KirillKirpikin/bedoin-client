import { api } from "./api";

export const merchApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getAllMerch: builder.query({
            query:()=>'merch',
            providesTags:(result)=>
            result
            ?   [
                    ...result.map(merch=>({type: 'Merch', id: merch._id})),
                    {type: 'Merch', id: 'LIST-MERCH'},                    
                    {type: 'Merch', id: 'PARTIAL-MERCH'},                    
                ]
            :   [
                    {type: 'Merch', id: 'LIST-MERCH'},                    
                    {type: 'Merch', id: 'PARTIAL-MERCH'}, 
                ]
        }),
        getAllAdminMerch:builder.query({
            query:()=>({
                url: 'merch/all',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            providesTags:(result)=>
            result
            ?   [
                    ...result.map(merch=>({type: 'Merch', id: merch._id})),
                    {type: 'Merch', id: 'LIST-MERCH'},                    
                    {type: 'Merch', id: 'PARTIAL-MERCH'},                    
                ]
            :   [
                    {type: 'Merch', id: 'LIST-MERCH'},                    
                    {type: 'Merch', id: 'PARTIAL-MERCH'}, 
                ]
        }),
        getMerch: builder.query({
            query:({id})=>`/merch/${id}`,
            providesTags:(result, error, id)=>[{type: 'Merch', id}],
        }),
        createMerch: builder.mutation({
            query: merch=>({
                body: merch,
                url:'/merch',
                method:'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Merch', id: 'LIST-MERCH'}],
        }),
        deleteMerch:builder.mutation({
            query:(id)=>({
                url: `/merch/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Merch', id: 'PARTIAL-MERCH'}]
        }),
        updateMerch: builder.mutation({
            query:({id, formData})=>({
                url: `/merch/${id}`,
                method: 'PUT',
                body: formData,
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:(result, error, arg)=>[{type: 'Merch', id: arg._id}]
        })  
    })
})

export const {useGetAllAdminMerchQuery, useGetAllMerchQuery, useGetMerchQuery, useUpdateMerchMutation,useCreateMerchMutation, useDeleteMerchMutation} = merchApi;