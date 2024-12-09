import React from 'react'
import { useDeleteStudentMutation, useGetStudentsQuery } from '../services/StudentsApi';
import { Link, useParams } from 'react-router-dom';

function Students() {
  var { id } = useParams();
    var {isLoading,data}= useGetStudentsQuery();
    var [ deleteFn ] = useDeleteStudentMutation()
      function del(id){
        deleteFn(id)
      }
    console.log(data);
  return (
    <div>
      <h1>Hello $riniva$</h1>
      <Link to='/addStud' className='btn btn-success'>Add Student</Link>
      { isLoading && <h1>Loading.....</h1> }
      { !isLoading && (
        <ul>{data?.map((std,id)=>{ return<li>
          <Link to={`/studetails/${std._id}`} className='text-decoration-none'>{std.name}
          </Link>
          <button className='btn btn-danger' onClick={()=>{del(std._id)}}>Delete</button>
          </li>
          })}</ul>
      ) }
    </div>
  )
};
export default Students
