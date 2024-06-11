import React from 'react';
import { DrawerNavBar } from './Drawer.NavBar';
import Header from './Header';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <DrawerNavBar>
        <main
          style={{
            marginLeft: 250, // Ajuste para a largura do Drawer
            marginTop: '6rem', // Ajuste para a altura do Header
            padding: '1rem',
            flexGrow: 1, // Para ocupar o espaço restante
            overflowY: 'auto',
          }}
        >
          {children}
        </main>
      </DrawerNavBar>
    </div>
  );
};
