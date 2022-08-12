import { createSlice } from "@reduxjs/toolkit";
import { editDataSave } from "../action/todo";
const initialState={
    id:null,
    text:null
}
const todoEditReducer=createSlice({
    name:"Edit",
    initialState,
    reducers:{
        editsave:editDataSave
    }
})
export const {editsave} = todoEditReducer.actions;
export default todoEditReducer.reducer;