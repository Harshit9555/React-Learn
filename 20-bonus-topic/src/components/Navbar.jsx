import React from 'react'

const Navbar = (props) => {
    function changeTheme() {
        if (props.theme === 'light') {
            props.setTheme('dark')
  return (
    <div>
        <p>Theme: {props.theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
