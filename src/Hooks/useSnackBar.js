import { useContext } from 'react';
import { SnackBarContext } from '../components/SnackBar/Snackbar';

export const useSnackbar = () => {
  const context = useContext(SnackBarContext);
  return context;
};
