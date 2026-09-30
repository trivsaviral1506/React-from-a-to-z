import { useState } from 'react'

import './App.css'

function App() {
 
const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 }
]);

const [search,setSearch] = useState("");
function handleChange(e){
setSearch(e.target.value);
}
function deleted(id){
  setProducts((prev)=>(
    prev.filter((product)=>product.id!==id)
  )
  )


}

const data =  products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
<h1> Product Manager </h1>

<h3> Search: </h3>
<input type="text" name="search" value={search} onClick = {()=>{handleChange}}></input>
{data.map((product)=>(
  <div key={product.id}>
<h3> {product.name} </h3>
<h3> {product.price} </h3>
<button onClick={()=>deleted(product.id)}> Delete </button>

</div>
))
}
<h3> Enter your details</h3>
<input type

      </>
  )
}

export default App;
