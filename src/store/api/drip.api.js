import { api } from "./api";

export const dripApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getAllDrip: builder.query({
            query: ()=>'drip',
            providesTags: (result)=>
            result
            ?   [
                    ...result.map(drip=>({type: 'Drip', id: drip._id})),
                    {type: 'Drip', id: 'LIST-DRIP'},                    
                    {type: 'Drip', id: 'PARTIAL-DRIP'},                    
                ]
            :   [
                    {type: 'Drip', id: 'LIST-DRIP'},                    
                    {type: 'Drip', id: 'PARTIAL-DRIP'}, 
                ]
        }),
        getAllAdminDrip:builder.query({
            query:()=>({
                url: 'drip/all',                
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }                
            }),
            providesTags: (result)=>
            result
            ?   [
                    ...result.map(drip=>({type: 'Drip', id: drip._id})),
                    {type: 'Drip', id: 'LIST-DRIP'},                    
                    {type: 'Drip', id: 'PARTIAL-DRIP'},                    
                ]
            :   [
                    {type: 'Drip', id: 'LIST-DRIP'},                    
                    {type: 'Drip', id: 'PARTIAL-DRIP'}, 
                ]
        }),
        getDrip: builder.query({
            query: ({id}) => `/drip/${id}`,
            providesTags:(result, error, id) => [{type: 'Drip', id}],
        }),
        createDrip: builder.mutation({
            query: drip=>({
                body: drip,
                url: '/drip',
                method: 'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Drip', id: 'LIST-DRIP'}],
        }),
        deleteDrip: builder.mutation({
            query: (id)=>({
                url: `/drip/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Drip', id: 'PARTIAL-DRIP'}]
        }),
        updateDrip: builder.mutation({
            query:({id, formData})=>({
                url:`/drip/${id}`,
                method:'PUT',
                body: formData,
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:(result, error, arg)=>[{type: 'Drip', id: arg._id}]
        })
    })
})

export const { 
    useGetAllAdminDripQuery, 
    useGetAllDripQuery, 
    useGetDripQuery, 
    useUpdateDripMutation, 
    useCreateDripMutation, 
    useDeleteDripMutation
} = dripApi;