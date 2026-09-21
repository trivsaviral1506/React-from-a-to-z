import { useState ,useCallback,useRef,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[length, setlength] = useState(8)
const[numberallowed, setnumberallowed] = useState(false)
const[charsallowed, setcharsallowed] = useState(false)
const[password,setpassword] = useState("password")
const passwordRef = useRef(null)

const passwordgenerator = useCallback(() =>{
let pass = "";
let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(numberallowed){
  str+="0123456789";
}
if(charsallowed){
  str+="!@#$%^&*()-+";
}
for(let i=1;i<=length;i++){
  let char = Math.floor(Math.random() * str.length);
  pass+=str.charAt(char);
}
setpassword(pass)
},[length,numberallowed,charsallowed,setpassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current
window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{
  passwordgenerator()}, [length, numberallowed,charsallowed,passwordgenerator]
)
  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"></div>
  <h1 className='text-white text-center my-3'> Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text" value={password} readOnly className="outline-none w-full py-1 px-3"
    placeholder="Password" ref={passwordRef}/>
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy</button>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange = {(e)=> setlength(Number(e.target.value))}/>
        <label>Length: {length}</label></div> 
<div className="flex items-center gap-x-1">
  <input
    type="checkbox"
    defaultChecked={numberallowed}
    onChange={() => {
      setnumberallowed((prev) => !prev)
    }}
  />
  <label>Numbers</label>
</div>
<div className="flex items-center gap-x-1">
  <input
    type="checkbox"
    defaultChecked={charsallowed}
    onChange={() => {
      setcharsallowed((prev) => !prev)
    }}
  />
  <label>Special Characters</label>
</div>
    </div>
  </div>
    </>
  )
}

export default App
