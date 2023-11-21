import {api} from "./api";

export const stickerApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getAllSticker: builder.query({
            query:()=>'/sticker',
            providesTags:(result)=>
            result
            ?   [
                ...result.map(sticker=>({type: 'Sticker', id: sticker._id})),
                {type: 'Sticker', id: 'LIST-STICKER'},                    
                {type: 'Sticker', id: 'PARTIAL-STICKER'},                    
            ]
        :   [
                {type: 'Sticker', id: 'LIST-STICKER'},                    
                {type: 'Sticker', id: 'PARTIAL-STICKER'}, 
            ]
        }),
        createSticker: builder.mutation({
            query: sticker=>({
                body:sticker,
                url:'/sticker',
                method:'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Sticker', id: 'LIST-STICKER'}],
        }),
        deleteSticker:builder.mutation({
            query:(id)=>({
                url: `/sticker/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Sticker', id: 'PARTIAL-STICKER'}]
        })
    })
})

export const { 
    useGetAllStickerQuery,
    useCreateStickerMutation,
    useDeleteStickerMutation
} = stickerApi;