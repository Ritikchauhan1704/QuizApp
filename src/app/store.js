import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topic/topicSlice";
export const store =configureStore({
    reducer:topicReducer
});