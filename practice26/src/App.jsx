import {  useReducer } from 'react'

import './App.css'
// function reducer(user,action){
//   if(action.type==="add"){
//     return {
//       ...user,
//     cart: [
//       ...user.cart,
//       {name: action.payload.name, price: action.payload.price

//       }
//     ],
    
// total : user.total+action.payload.price
//     };

  
    
//     if(action.type==="remove"){
// return {
//     const price = user.cart[user.cart.length-1].price;
//     user.total = user.total-price;
//     const newCart = user.cart.slice(0, -1);
//   };
//   if(action.type==="clear"){
// cart: []
//   }
 
// }
function reducer(user, action) {

  if (action.type === "add") {
    return {
      ...user,
      cart: [
        ...user.cart,
        {
          name: action.payload.name,
          price: action.payload.price
        }
      ],
      total: user.total + action.payload.price
    };
  }

  if (action.type === "removeitem") {

    if (user.cart.length === 0) {
      return user;
    }

    const lastItem = user.cart[user.cart.length - 1];

    return {
      ...user,
      cart: user.cart.slice(0, -1),
      total: user.total - lastItem.price
    };
  }

  if (action.type === "clear") {
    return {
      ...user,
      cart: [],
      total: 0
    };
  }

  return user;
}
function App() {
 const [user,dispatch] = useReducer(reducer,{
        cart: [],
        total:0
  })

  return (
    <>
    {
      user.cart.map((item)=>(
        <div> 
        <h1> {item.name} </h1>
        <h3> {item.price} </h3>

        </div>
      ))
    }
    <h3> Total : {user.total} </h3>
      <button onClick={()=>dispatch(
        {
type:"add",
payload: {
name: "apple",
price:50
}}
      )}>
Add apple 
      </button>
      <button onClick={()=>dispatch(
        {
type:"add",
payload: {
name:"banana",
price:20}
        }
      )}>
Add banana 
      </button>
      <button onClick={()=>dispatch(
        {
type:"add",
payload: {
name: "mango",
price:80}
        }
      )}>
Add Mango 
      </button>
      <button onClick={()=>dispatch({
        type:"removeitem"
      })}>Remove</button>
      <button onClick={()=>dispatch({
        type:"clear"
      })}>Clear</button>
    </>
  )
}

export default App
