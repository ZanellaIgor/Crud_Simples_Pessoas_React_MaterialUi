import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Grid, MenuItem, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputMask } from '../InputsMask/Input.Mask';
import { SchemaFormClient } from './Form.Client.Schema';

export const FormClient = (register) => {
  const {
    handleSubmit,
    register: reg,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { ...register },
    resolver: yupResolver(SchemaFormClient),
  });
  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <form noValidate onSubmit={handleSubmit(submitForm)}>
      <Card sx={{ mb: 2 }}>
        <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
          <Grid item>
            <TextField
              {...reg('name')}
              label="Nome"
              error={!!errors?.name}
              helperText={errors?.name?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              {...reg('tipoPessoa')}
              defaultValue="pf"
              label="Tipo Pessoa"
              id="outlined-select"
              select
            >
              <MenuItem value="pf">Física</MenuItem>
              <MenuItem value={'pj'}>Jurídica</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              {...reg('inscricaoEstadual')}
              label="Inscrição Estadual"
              error={!!errors?.inscricaoEstadual}
              helperText={errors?.inscricaoEstadual?.message}
            />
          </Grid>
          <Grid item>
            <InputMask
              typeInput={watch('tipoPessoa') === 'pf' ? 'cpf' : 'cnpj'}
              control={control}
              name="cpfCnpj"
              label={watch('tipoPessoa') === 'pf' ? 'CPF' : 'CNPJ'}
            />
          </Grid>

          <Grid item>
            <InputMask
              typeInput="celPhone"
              control={control}
              name="celular"
              label="Celular"
            />
          </Grid>
          <Grid item>
            <InputMask
              typeInput="phone"
              control={control}
              name="telefone"
              label="Telefone"
            />
          </Grid>
          <Grid item>
            <TextField {...reg('email')} label="E-mail" />
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
            <InputMask
              typeInput="cep"
              control={control}
              name="cep"
              label={'Cep'}
            />
          </Grid>
        </Grid>
      </Card>

      <Stack
        sx={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          pd: 2,
          mt: 2,
        }}
      >
        <Button variant="contained">Voltar</Button>
        <Button type="submit" variant="contained" color="success">
          Salvar
        </Button>
      </Stack>
    </form>
  );
};
