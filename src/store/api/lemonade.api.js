import { api } from "./api";

export const lemonadeApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getAllLemonade: builder.query({
            query: ()=>'lemonade',
            providesTags: (result)=>
            result
            ?   [
                    ...result.map(lemonade=>({type: 'Lemonade', id: lemonade._id})),
                    {type: 'Lemonade', id: 'LIST-LEMONADE'},                    
                    {type: 'Lemonade', id: 'PARTIAL-LEMONADE'},                    
                ]
            :   [
                    {type: 'Lemonade', id: 'LIST-LEMONADE'},                    
                    {type: 'Lemonade', id: 'PARTIAL-LEMONADE'}, 
                ]
        }),
        getAllAdminLemonade:builder.query({
            query:()=>({
                url: 'lemonade/all',                
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }                
            }),
            providesTags: (result)=>
            result
            ?   [
                    ...result.map(lemonade=>({type: 'Lemonade', id: lemonade._id})),
                    {type: 'Lemonade', id: 'LIST-LEMONADE'},                    
                    {type: 'Lemonade', id: 'PARTIAL-LEMONADE'},                    
                ]
            :   [
                    {type: 'Lemonade', id: 'LIST-LEMONADE'},                    
                    {type: 'Lemonade', id: 'PARTIAL-LEMONADE'}, 
                ]
        }),
        getLemonade: builder.query({
            query: ({id}) => `/lemonade/${id}`,
            providesTags:(result, error, id) => [{type: 'Lemonade', id}],
        }),
        createLemonade: builder.mutation({
            query: lemonade=>({
                body: lemonade,
                url: '/lemonade',
                method: 'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Lemonade', Lemonade: 'LIST-LEMONADE'}],
        }),
        deleteLemonade: builder.mutation({
            query: (id)=>({
                url: `/lemonade/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Lemonade', id: 'PARTIAL-LEMONADE'}]
        }),
        updateLemonade: builder.mutation({
            query:({id, formData})=>({
                url:`/lemonade/${id}`,
                method:'PUT',
                body: formData,
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:(result, error, arg)=>[{type: 'Lemonade', id: arg._id}]
        })
    })
})

export const {
    useGetAllAdminLemonadeQuery,
    useGetAllLemonadeQuery,
    useGetLemonadeQuery,
    useUpdateLemonadeMutation,
    useCreateLemonadeMutation,
    useDeleteLemonadeMutation
} = lemonadeApi;