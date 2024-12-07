import React from 'react'
import { useGetstudentDetailsQuery } from '../services/StudentsApi';
import { useParams } from 'react-router-dom';
function StudentDetails() {
    var {id} = useParams();
    console.log(id);
    var { isLoading,data }= useGetstudentDetailsQuery(id);
    console.log(data);
  return (
    <div>
        { isLoading && <h1>Loading........</h1> }
        <h1>{data?.name}</h1>
        <h4>{data?.gender}</h4> 
        <b>{data?.age}</b> <br />       
        <i>{data?.weight}</i>       
    </div>
  )
}
export default StudentDetails
