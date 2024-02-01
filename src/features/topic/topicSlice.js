import { createSlice } from "@reduxjs/toolkit";

const initialState={
    topic:"Anime",
    id:"31",
};

const topicSlice=createSlice({
    name:"Topic",
    initialState,
    reducers:{
        updateTopic:(state,action)=>{
            state.topic=action.payload.topic;
            state.id=action.payload.id;
        },
    }
})
export const {updateTopic}=topicSlice.actions;

export default topicSlice.reducer