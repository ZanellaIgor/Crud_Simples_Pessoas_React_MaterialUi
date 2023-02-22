import React from 'react'
import { Link } from 'react-router-dom'

import "./Navibar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container-menu'>
        <h1>Menu</h1>
        <ul>
        <Link to="/"><ol>Home</ol></Link>
        <Link to='/pages/clients/list_client'><ol>Lista de Clientes</ol></Link>
        <Link to="/pages/clients/new_client"><ol>Adicionar Clientes</ol></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar