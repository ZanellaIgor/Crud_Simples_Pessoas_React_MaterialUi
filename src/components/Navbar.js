import React from 'react'
import { Link } from 'react-router-dom'

import "./Navibar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <Link to="/">Home</Link>
        <Link to='/pages/clients/list_client'>Lista de Clientes</Link>
        <Link to="/pages/clients/new_client">Clientes</Link>
      </ul>
    </nav>
  )
}

export default Navbar