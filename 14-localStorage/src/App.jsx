import React from 'react'

const App = () => {
  // localStorage.setItem('user','Harshit')
  // const user = localStorage.getItem('user')
  // console.log(user)
  // localStorage.removeItem('user')
  // localStorage.clear()

  const user = {
    usename: 'Harshit',
    age: 21,
    city:'Salempur'
  }

  localStorage.setItem(user,JSON.stringify(user))

  let useroutput = JSON.parse(localStorage.getItem('user'))
  console.log(useroutput);
  

  return (
    <div>
    </div>
  )
}

export default App
