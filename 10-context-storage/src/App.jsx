import { useState , useEffect} from 'react'
import {TodoProvider} from './contexts'
import './App.css'

function App() {
  //state me to saare todo diye hai individual nhi hai hmare pas
  const [todos, setTodos] = useState([])
const addTodo = (todo)=>{
  //spread operator ka use kiya saari array ki value destructure krne ke liye 
  setTodos((prev)=>[...prev, {id: Date.now(),...todo}])
}
const updatedTodo = (id,todo)=>{
  setTodos((prev)=>
prev.map((prevTodo)=>(prevTodo.id===id)?todo:prevTodo)
  )
}
const deleteTodo = (id)=>{
  setTodos((prev)=>
    prev.filter((prevTodo)=>
      (prevTodo.id!==id)
    
  ))}
  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
//for setting local storage 
 useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])

 // for getting
 useEffect(()=>{
const tododata = JSON.parse(localStorage.getItem('todos'))
if(tododata && tododata>0){
  setTodos(tododata);
}
 },[])
  return (
    <>
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        
                        
                    </div>
                </div>
            </div>
         </TodoProvider>
    </>
  )
}

export default App
