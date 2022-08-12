import { configureStore } from '@reduxjs/toolkit';
import todoEditReducer from './reducer/todoEditReducer';
import todoReducer from './reducer/todoReducer';

export const store=configureStore({
    reducer:{
        todo:todoReducer,
        editData:todoEditReducer
    }
})