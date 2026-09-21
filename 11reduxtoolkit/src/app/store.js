import {configureStore} from '@reduxjs/toolkit'
//store chhaiye hota h ,fir reducer bnana hota h
import todoReducer from '../features/todo.todoSlice';

export const store = configureStore({
    reducer: todoReducer
})