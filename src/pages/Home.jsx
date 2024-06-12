import { Grid, Typography } from '@mui/material';
import React from 'react';

export const Home = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} mt="2rem" padding={2}>
      <Grid item md={12}>
        <Typography textAlign="center" component={'h1'}>
          Bem Vindo!
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography textAlign="center" component={'h1'}>
          CRUD de pessoas. Com Material UI e ReactJs.
        </Typography>
      </Grid>
    </Grid>
  );
};
