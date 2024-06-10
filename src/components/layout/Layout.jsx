import React from 'react';
import { DrawerNavBar } from './Drawer.NavBar';
import Header from './Header';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <DrawerNavBar />
      <main
        style={{
          marginLeft: 250,
          marginTop: '6rem',
          padding: '1rem',
          height: '100%',
        }}
      >
        {children}
      </main>
    </div>
  );
};
