import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsFillPersonPlusFill } from 'react-icons/bs';

import { Toolbar } from '@mui/material';
import './Navibar.css';

const Navbar = () => {
  const link = [
    { menu: 'Home', link: '/', icon: '' },
    { menu: 'Lista de Clientes', link: '/pages/clients/list_client', icon: '' },
    {
      menu: 'Home',
      link: '/pages/clients/new_client',
      icon: '',
    },
  ];
  return (
    <nav className="navbar">
      <div className="container-menu">
        <h1>Menu</h1>
        <ul className="container-nav-menu">
          <Link to="/">
            <ol className="container-lista-nav">
              Home <AiOutlineHome className="container-icon" />
            </ol>
          </Link>
          <Link to="/pages/clients/list_client">
            <ol className="container-lista-nav">
              Lista de Clientes{' '}
              <BsFillPersonLinesFill className="container-icon" />
            </ol>
          </Link>
          <Link to="/pages/clients/new_client">
            <ol className="container-lista-nav">
              Adicionar Clientes{' '}
              <BsFillPersonPlusFill className="container-icon" />{' '}
            </ol>
          </Link>
        </ul>
      </div>
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        sssadasdasasd
      </Toolbar>
    </nav>
  );
};

export default Navbar;
