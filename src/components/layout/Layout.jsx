import React from 'react';
import DrawerNavBar from './Drawer.NavBar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <DrawerNavBar />
      <main style={{ marginLeft: 250, marginTop: '6rem' }}>{children}</main>
    </div>
  );
};

export default Layout;
