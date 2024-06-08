import { Alert, AlertTitle, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

export const SnackBarContext = React.createContext({});
export function SnackBarProvider({ children }) {
  const [state, setState] = React.useState({
    open: false,
    title: '',
    type: 'info',
    text: '',
  });
  const { open, type, title, text } = state;

  const controllerSnack = ({ title, type, text }) => {
    setState({ open: true, title, type, text });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <SnackBarContext.Provider value={{ controllerSnack }}>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          onClose={handleClose}
          transitionDuration={{ enter: 500, exit: 1000 }}
        >
          <Alert severity={type}>
            <AlertTitle
              sx={{
                fontSize: '1.1rem',
                letterSpacing: '0.030rem',
              }}
            >
              {title}
            </AlertTitle>
            <Typography>{text}</Typography>
          </Alert>
        </Snackbar>
      </Box>
      {children}
    </SnackBarContext.Provider>
  );
}
