import React from 'react'
import { useGetStudentsQuery } from '../services/StudentsApi';
import { Link } from 'react-router-dom';

function Students() {
    var {isLoading,data}= useGetStudentsQuery();
    
    console.log(data);
  return (
    <div>
      <h1>Hello $riniva$</h1>
      <Link to='/addStud' className='btn btn-success'>Add Student</Link>
      { isLoading && <h1>Loading.....</h1> }
      { !isLoading && (
        <ul>{data?.map((std)=>{ return<li>
          <Link to={`/studetails/${std._id}`} className='text-decoration-none'>{std.name} <button className='btn btn-danger'>Delete</button></Link></li>
          })}</ul>
      ) }
    </div>
  )
};
export default Students
