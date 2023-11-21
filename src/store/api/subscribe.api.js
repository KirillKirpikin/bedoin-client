import {api} from "./api";

export const subscribeApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getAllSubs: builder.query({
            query:()=>({
                url: 'subs',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                } 
            }),
            providesTags: (result)=>
            result
            ?   [
                    ...result.map(sub=>({type: 'Sub', id: sub._id})),
                    {type: 'Sub', id: 'LIST-SUB'},                    
                    {type: 'Sub', id: 'PARTIAL-SUB'},                    
                ]
            :   [
                    {type: 'Sub', id: 'LIST-SUB'},                    
                    {type: 'Sub', id: 'PARTIAL-SUB'}, 
                ]
        }),
        createSubs: builder.mutation({
            query: sub=>({
                body: sub,
                url: `/subs`,
                method: 'POST'
            }),
            invalidatesTags:[{type: 'Sub', id: 'LIST-SUB'}]
        }),
        deleteSubs: builder.mutation({
            query: (id)=>({
                url: `/subs/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Sub', id: 'PARTIAL-SUB'}]
        }),
        updateSubs: builder.mutation({
            query:({id, payload})=>({
                url:`/subs/${id}`,
                method:'PUT',
                body: payload,
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:(result, error, arg)=>[{type: 'Sub', id: arg._id}]
        })
    })
})

export const {
    useCreateSubsMutation,
    useUpdateSubsMutation,
    useDeleteSubsMutation,
    useGetAllSubsQuery
} = subscribeApi;