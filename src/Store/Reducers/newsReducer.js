const initialState = {
    news:[{
        title:"news1",
        body:"новость 1 для теста",
        image: "image"
    },
    {
        title:"news1",
        body:"новость 1 для теста",
        image: "image"
    },
    {
        title:"news1",
        body:"новость 1 для теста",
        image: "image"
    },{
        title:"news1",
        body:"новость 1 для теста",
        image: "image"
    },
    {
        title:"news1",
        body:"новость 1 для теста",
        image: "image"
    }
]
}   


export const newsReducer = (state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}