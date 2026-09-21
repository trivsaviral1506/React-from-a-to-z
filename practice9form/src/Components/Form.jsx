import {useState} from 'react'
import {Submission} from './Submission';
export function Form(){
    const [submitted, setsubmitted] = useState(false);
     const[Formdata,setFormdata] = useState({
        name:"",
        email:"",
        car:"",
        days:"",
    })
    const handleChange=(e)=>{
const{name,value} = e.target;
setFormdata((prev)=>(
    {
        ...prev,[name]: value,
    }

)
);
    }
 
    const Print = (e)=>{
e.preventDefault();
if(!Formdata.name || !Formdata.email || !Formdata.car || !Formdata.days){
    alert("please fill all the fields") ;
} 
setsubmitted(true);


console.log(Formdata);
 
}
    
    return (
        <>
        <form onSubmit={Print}>
<input name="name" type="text" value={Formdata.name} placeholder="enter your name" onChange={handleChange}></input>
<input name="email" type="email" value={Formdata.email} placeholder="enter your email" onChange={handleChange}></input>

<select name='car' value={Formdata.car} onChange={handleChange} >
    <option value="BMW">BMW</option>
    <option value="Audi">Audi</option>
    <option value="Mercedes">Mercedes</option>
    <option value="Toyota">Toyota</option>
</select>
<input name="days" type="number" onChange={handleChange} value={Formdata.days}></input>
<button type="submit"> Submit </button>

        </form>
        { submitted && <Submission name={Formdata.name}
        email={Formdata.email}
        car={Formdata.car}
        days={Formdata.days}
    />
}
        </>
    )

    
}