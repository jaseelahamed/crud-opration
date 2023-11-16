
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





function Edite() {
    const[id,setId]=useState()
    const[name,setName]=useState()
    const[desig,setDesig]=useState()
    const[age,setAge]=useState()
    const[salary,setSalary]=useState(0)


    const location=useNavigate()
     



const param=useParams()
console.log(param.id+"idkando")


const fetchEmployee=async ()=>{
    const result=await axios.get("http://localhost:4200/get-employee/"+param.id)
    console.log(result)
    setId(result.data.employee.id)
    setName(result.data.employee.name)
    setAge(result.data.employee.age)
    setDesig(result.data.employee.desig)
    setSalary(result.data.employee.salary)
}
useEffect(()=>{
    fetchEmployee()
},[])





const handleUpdate=async (e)=>{
    e.preventDefault()


    const body={
        id,
        name,
        age,
        desig,
        salary
    }
    console.log(body)
    const result=await axios.post("http://localhost:4200/update-employee",body)
    console.log(result)
    alert(result.data.message)
    location("/")

}

  return (
    <div>
        <h1>Employee Detail Update</h1>
<div className='containar'>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  value={name}
        onChange={(e)=>setName(e.target.value)}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Employee's Age</Form.Label>
        <Form.Control type="Number" placeholder="Enter Age"  value={age}
         onChange={(e)=>setAge(e.target.value)}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Employee's Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation"   value={desig}
         onChange={(e)=>setDesig(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Employee's Salary</Form.Label>
        <Form.Control type="Number" placeholder="Enter Salary"  value={salary}
         onChange={(e)=>setSalary(e.target.value)}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary" type="submit" onClick={(e)=>{handleUpdate(e)}}>
        Submit
      </Button>
      {" "}
      <Link to='/'>
<Button className='btn btn-danger'>close</Button>


      </Link>
    </Form>
</div>
    </div>
  )
}

export default Edite