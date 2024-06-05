import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonPlusFill, BsFillPersonLinesFill } from 'react-icons/bs'
import "./Home.css"

const Home = () => {
  return (
    <section>
      <h1 className='container-home-h'>Seja bem vindo! Faça um tour XD</h1>
      <ol className="container-link-home">
        <Link to='/pages/clients/list_client' className='container-ul'>
          <ul>Lista de Clientes  <BsFillPersonLinesFill /></ul>
        </Link>
        <Link to="/pages/clients/new_client" className='container-ul'>
          <ul>Adicionar Clientes  <BsFillPersonPlusFill /></ul>
        </Link>
      </ol>
    </section>
  )
}

export default Home