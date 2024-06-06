import { Button, Card, Grid, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export const FormClient = () => {
  const { handleSubmit, register: reg, watch } = useForm({});
  const submitForm = (values) => {
    console.log(values);
  };
  return (
    <form noValidate onSubmit={handleSubmit(submitForm)}>
      <Card>
        <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
          <Grid item>
            <TextField {...reg('name')} label="Nome" />
          </Grid>
          <Grid item>
            <TextField
              {...reg('inscricaoEstadual')}
              label="Inscrição Estadual"
            />
          </Grid>
          <Grid item>
            <TextField {...reg('cnpjcpf')} label="CPF ou CNPJ" />
          </Grid>

          <Grid item>
            <TextField {...reg('celular')} label="Celular" />
          </Grid>
          <Grid item>
            <TextField {...reg('Telefone')} label="Telefone" />
          </Grid>
        </Grid>
      </Card>
      <Card mt={2}>
        {/* Endereços */}
        <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
          <Grid item>
            <TextField {...reg('ud')} label="Estado" />
          </Grid>
          <Grid item>
            <TextField {...reg('cidade')} label="Cidade" />
          </Grid>
          <Grid item>
            <TextField {...reg('bairro')} label="bairro" />
          </Grid>
          <Grid item>
            <TextField {...reg('rua')} label="Rua" />
          </Grid>
          <Grid item>
            <TextField {...reg('numero')} label="Número" />
          </Grid>
          <Grid item>
            <TextField {...reg('cep')} label="CEP" />
          </Grid>
        </Grid>
      </Card>
      <Stack>
        <Button type="submit">Salvar</Button>
      </Stack>
    </form>
  );
};
