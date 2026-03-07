import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  // function getData(){
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json)); 
  // }
  const [data, setdata] = useState([])
  const getData = async() =>{
    const response = await axios.get("https://picsum.photos/v2/list");

    setdata(response.data)

  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello,{elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
