import {useContext,createContext} from 'react'
export const TodoContext = createContext({
 todos:[
//array of todos ,then function
    {
        id:1,
        todo: "todo msg",
        completed: false,
    }
],
addTodo: (todo) => {},
updatedTodo: (id, todo)=>{

},
deleteTodo: (id)=>{

},
toggleComplete:(id)=>{

}
}
)
 


export const Todo = ()=>{
    return useContext(TodoContext)
 }


 export const TodoProvider = TodoContext.Provider