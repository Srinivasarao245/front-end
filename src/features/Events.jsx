import React from 'react'
import { useGetEventsQuery } from '../services/EventsApi'
function Events() {
    var {isLoading,data}=useGetEventsQuery();
    console.log(data);
  return (
    <div>
      <h1>Hello $riniva$</h1>
    </div>
  )
};
export default Events
