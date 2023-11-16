
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


function Reg() {
const[id,setId]=useState()
const[name,setName]=useState()
const[desig,setDesig]=useState()
const[age,setAge]=useState()
const[salary,setSalary]=useState(0)
 
const location=useNavigate()

useEffect(()=>{
  setId(uuidv4().slice(0,3))
},[])

const handleSubmit=async (e)=>{
  e.preventDefault()
  setId(uuidv4().slice(0,3))

console.log(id)
// console.log(name)
// console.log(age)
// console.log(desig)
// console.log(salary)
  const body={
    id,
    name,
    age,
    desig,
    salary
  }
  console.log(body)
  const result=await axios.post("http://localhost:4200/addemployee",body)
  console.log(result)
  alert(result.data.message)
  location("/")
}





  return (
    <div>
      <h1>Employee Registration</h1>
<div className='containar'>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
        onChange={(e)=>{setName(e.target.value)}}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Employee's Age</Form.Label>
        <Form.Control type="Number" placeholder="Enter Age"
        onChange={(e)=>{setAge(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Employee's Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation" 
        onChange={(e)=>{setDesig(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Employee's Salary</Form.Label>
        <Form.Control type="Number" placeholder="Enter Salary"
        onChange={(e)=>{setSalary(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={(e)=>{handleSubmit(e)}} variant="primary" type="submit">
        Submit
      </Button>
      <Link to='/'>
<Button className='btn btn-danger'>close</Button>


      </Link>
    </Form>
</div>

    </div>
  )
}

export default Reg