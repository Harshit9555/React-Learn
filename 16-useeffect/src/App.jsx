import React, { useEffect, useState } from 'react'

const App = () => {
  //Run only once  (compound mount)....

  // const [num, setnum] = useState(0);
  // useEffect(
  //   function () {
  //     console.log("Use Effect is running..");
  //   },
  //   [],
  // );
  
  // run on every dependency changes.....

  // const [num, setnum] = useState(0)
  // useEffect(function(){
  //   console.log("Use Effect is running..");
  // },[num])


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>
        {
          setnum(num+1)
        }
      }>Click</button>
    </div>
  )
}

export default App
