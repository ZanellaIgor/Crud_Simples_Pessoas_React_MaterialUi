import React from 'react'
import { Link } from 'react-router-dom'

import "./Navibar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container-menu'>
        <h1>Menu</h1>
        <ul>
          <ol><Link to="/">Home</Link></ol>
          <ol><Link to='/pages/clients/list_client'>Lista de Clientes</Link></ol>
          <ol><Link to="/pages/clients/new_client">Adicionar Clientes</Link></ol>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar