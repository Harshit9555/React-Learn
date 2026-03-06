import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0);

  function increaseNum(){
    setnum(num+1);
  }
  function decreaseNum(){
    if(num>0){
      setnum(num - 1);
    }
  }
  function Reset(){
    setnum(0);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App
