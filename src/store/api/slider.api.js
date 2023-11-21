import {api} from "./api";

export const slideApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getAllSlide: builder.query({
            query:()=>'slider',
            providesTags:(result)=>
            result
            ?   [
                ...result.map(slider=>({type: 'Slider', id: slider._id})),
                {type: 'Slider', id: 'LIST-SLIDER'},                    
                {type: 'Slider', id: 'PARTIAL-SLIDER'},                    
            ]
        :   [
                {type: 'Slider', id: 'LIST-SLIDER'},                    
                {type: 'Slider', id: 'PARTIAL-SLIDER'}, 
            ]
        }),
        createSlide: builder.mutation({
            query: slider=>({
                body:slider,
                url:'/slider',
                method:'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Slider', id: 'LIST-SLIDER'}],
        }),
        deleteSlide:builder.mutation({
            query:(id)=>({
                url: `/slider/${id}`,
                method: 'DELETE',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:[{type: 'Slider', id: 'PARTIAL-SLIDER'}]
        })
    })
})

export const {
    useGetAllSlideQuery, 
    useCreateSlideMutation, 
    useDeleteSlideMutation
} = slideApi;