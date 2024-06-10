import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';

const Header = ({ children }) => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: '#1976d2', height: '6rem' }}>
        <Toolbar
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        ></Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Header;
