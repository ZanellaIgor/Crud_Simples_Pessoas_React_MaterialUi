import React from 'react'
import { Link } from 'react-router-dom'

import "./Home.css"

const Home = () => {
  return (
    <section> 
      <h1>Seja bem vindo! Faça um tour XD</h1>
      <div className="container-link-home">
      <Link to='/pages/clients/list_client'><h3>Lista de Clientes</h3></Link>
      <Link to="/pages/clients/new_client"><h3>Adicionar Clientes</h3></Link>
      </div>
    </section>
  )
}

export default Home