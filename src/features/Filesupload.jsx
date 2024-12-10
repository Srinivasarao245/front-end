import React from 'react'
function Filesupload() {
  return (
    <div>
      <form action="/abc" method="post" encType="multipart/form-data">
        <input type="file" name='File'/>
        <button>Submit</button>
    </form>
    </div>
  )};
export default Filesupload
