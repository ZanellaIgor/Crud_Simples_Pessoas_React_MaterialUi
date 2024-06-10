import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const NotFoundPage = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" color="error">
            Página Não Encontrada
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Ops! Parece que você acessou uma página que não existe.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default NotFoundPage;
