import {createSlice ,nanoid} from '@reduxjs/toolkit';

//nanoid unique id generate krna
const initialState = {
    todos: [{id: 1,text: "hello world"}]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        //all are functions
        updateTodo : (state,action)=>{
            const {id,nextText} = action.payload;

            const todo = state.todos.find((t)=>t.id===id);
            if(todo){
                todo.text = nextText;
            }
        }
    }
})
//individual functionality so that we can use in as components
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer