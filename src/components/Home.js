import React from 'react'
import { Link } from 'react-router-dom'

import "./Home.css"

const Home = () => {
  return (
    <section> 
      <h1>Seja bem vindo! Faça um tour XD</h1>
      <div className="container-link-home">
      <h3><Link to='/pages/clients/list_client'>Lista de Clientes</Link></h3>
      <h3><Link to="/pages/clients/new_client">Adicionar Clientes</Link></h3>
      </div>
    </section>
  )
}

export default Home