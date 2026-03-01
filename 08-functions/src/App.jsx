import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked')
  }
   function mouseEnter() {
     console.log("button is clicked");
   }
  return (
    <div>
      <h1>Hello,Harshit</h1>

      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Change User</button>
    </div>
  )
}

export default App
