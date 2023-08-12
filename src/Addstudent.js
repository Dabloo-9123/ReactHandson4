import React, { useContext } from 'react';
import StoreData from './Store'
import { useNavigate } from 'react-router-dom';

function Addstudent() {
    const contextData =useContext(StoreData)
console.log(contextData)
const newStu={
    name:"",
    agr:"",
    course:"",
    batch:""
}
const Navi =useNavigate()

const handleChange=(e)=>{
    newStu[e.target.name]=e.target.value;
   
}

const HandleClick=()=>{
    contextData.Studata.push(newStu);
    Navi('/Student');
}
  return (

<>
<div className='first'>Addstudent</div>


<div className='form'>
<label htmlFor='Name'>Name:</label> <br></br>
<input type='text' id='Name' placeholder='Name' name='Name' onChange={handleChange}></input>
<br></br>

<label htmlFor='Age'>Age:</label><br></br>
<input type='number' id='Age' placeholder='Age' name='Age' onChange={handleChange}></input>
<br></br>

<label htmlFor='Course'>Course:</label><br></br>
<input type='text' id='Course' placeholder='Course' name='Course' onChange={handleChange}></input>
<br></br>

<label htmlFor='Batch'>Batch:</label><br></br>
<input type='text'  id='Batch' placeholder='Batch' name='Batch' onChange={handleChange}></input>
<br></br>


<button type='submit' className='buttoninside' onClick={HandleClick}>Add new Student</button>
</div>

</> 
   )
}

export default Addstudent