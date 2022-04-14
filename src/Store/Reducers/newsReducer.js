import { ADD_NEWS,GET_ALL_NEWS } from "../types"
const initialState = {
    news:[{
        title:"news1",
        body:"новость 1 для теста",
        image: "image"
    }
]
}   


export const newsReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_NEWS:
            state.status = action.payload
            return state
        case GET_ALL_NEWS:
            state.news = action.data
            return state
        default:
            return state
    }
}