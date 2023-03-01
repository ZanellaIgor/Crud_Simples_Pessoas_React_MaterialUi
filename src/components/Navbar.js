import React from 'react'
import { Link } from 'react-router-dom'

import {BsFillPersonPlusFill, BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'

import "./Navibar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container-menu'>
        <h1>Menu</h1>
        <ul className='container-nav-menu'>
        <Link to="/"><ol className='container-lista-nav'>Home <AiOutlineHome className='container-icon'/></ol></Link>
        <Link to='/pages/clients/list_client'><ol className='container-lista-nav'>Lista de Clientes <BsFillPersonLinesFill className='container-icon'/></ol></Link>
        <Link to="/pages/clients/new_client"><ol className='container-lista-nav'>Adicionar Clientes <BsFillPersonPlusFill className='container-icon'/> </ol></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar