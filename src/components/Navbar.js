import React from 'react'
import { Link } from 'react-router-dom'

import "./Navibar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      
        <Link to="/">Home</Link>
        <Link to="/pages/clients/new_client">Clientes</Link>
    </nav>
  )
}

export default Navbar