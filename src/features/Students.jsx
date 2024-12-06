import React from 'react'
import { useGetStudentsQuery } from '../services/StudentsApi';

function Students() {
    var {isLoading,data}= useGetStudentsQuery();
    console.log(data);
  return (
    <div>
      <h1>Hello $riniva$</h1>
      <button className='btn btn-success'>Add Student</button>
      { isLoading && <h1>Loading.....</h1> }
      { !isLoading && (
        <ul>{data?.map((std)=>{ return<li>{std.name}</li> })}</ul>
      ) }
    </div>
  )
};
export default Students
