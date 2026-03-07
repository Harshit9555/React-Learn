import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Submitted form by",title)
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" 
        placeholder="Enter your Name" 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}

         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App
