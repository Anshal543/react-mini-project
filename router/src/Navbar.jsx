import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    function handleClick() {
        setTimeout(() => {
            console.log('You clicked on the link')
            navigate('/app2')
        }, 1000)
    }
  return (
    <div>
        
        <Link to="/">Home</Link>
        <Link to="/app2">App2</Link>
        <Link to="/app3">App3</Link>
        <Link to="/app4">App4</Link>

        <button onClick={handleClick}>App2</button>

    </div>
  )
}

export default Navbar