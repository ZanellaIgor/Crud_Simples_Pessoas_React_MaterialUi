import { Card, Grid, Typography } from '@mui/material';
import React from 'react';

export const Home = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} mt="2rem">
      <Grid item md={12}>
        <Card>
          <Typography textAlign="center">Bem Vindo</Typography>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card sx={{ height: '6rem' }}>
          <Typography textAlign="center">Sistema em Reconstrução.</Typography>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card sx={{ height: '6rem' }}>
          <Typography textAlign="center">Aguarde Atualização.</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};
