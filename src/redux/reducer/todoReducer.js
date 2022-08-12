import { createSlice } from "@reduxjs/toolkit";
import { removeTodoItem, updateTodoItem,addTodoItem,removeAllTodoItem, editTodoItem } from "../action/todo";
const initialState=JSON.parse(localStorage.getItem("todo")) || [];
const editInputValue=false;
const inputValueReducer=createSlice({
    name:"inputValue",
    initialState,
    editInputValue,
    reducers:{
        add:addTodoItem,
        remove:removeTodoItem,
        update:updateTodoItem,
        removeAll:removeAllTodoItem,
        edit:editTodoItem
    }
})
export const {add,remove,update,removeAll,edit} = inputValueReducer.actions;
export default inputValueReducer.reducer;