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
            marginLeft: 250,
            marginTop: '4rem',
            flexGrow: 1,
            overflow: 'hidden',
            maxHeight: '100%',
          }}
        >
          {children}
        </main>
      </DrawerNavBar>
    </div>
  );
};
