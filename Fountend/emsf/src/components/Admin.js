
import Table from 'react-bootstrap/Table';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Admin() {


  const[allEmp,setallEmp]=useState([])

const fetchData=async ()=>{
  const result=await axios.get("http://localhost:4200/all-employees")
  console.log(result.data.employee)
  setallEmp(result.data.employee)
}
useEffect(()=>{
  fetchData()
},[])
const handleDelet=async (id)=>{
  const result=await axios.delete("http://localhost:4200/remove-employee/"+id)
  alert(result.data.message)
  fetchData()
}
  return (
    <div>
        <h1>
        <i class="fa-solid fa-user-group-simple"></i>Employee Managment System{""}
        <Link to='/reg' className='btn btn-success mr-5'>Add Employee <i class="fa-solid fa-user-plus"></i></Link>
        </h1>

<div className='mt-3'>
n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
</div>

        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allEmp?.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.desig}</td>
            <td>{item.salary}</td>
            <td>
              <Link to={'/edit/'+item.id}>
              <button className='btn btn-warning'><i class="fa-solid fa-pen"></i></button>
              </Link>
              
              <button className='btn btn-danger'  onClick={()=>{handleDelet(item.id)}}><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
          )
          )
        }
     
       
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
    </div>
  )
}

export default Admin