import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Grid, MenuItem, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useSnackbar } from '../../Hooks/useSnackBar';
import { InputMask } from '../InputsMask/Input.Mask';
import { SchemaFormClient } from './Form.Client.Schema';

export const FormClient = (register) => {
  const { controllerSnack } = useSnackbar();
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
  const handleChangeCep = (event) => {
    const cep = event.target.value.replace('-', '').replaceAll('_', '');
    console.log(cep, cep.length);
    if (cep.length === 8) {
      getAddress(cep);
    }
  };

  const getAddress = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await axios.get(`${url}`);
      console.log(response);
      controllerSnack({
        open: true,
        title: 'Ok!',
        type: 'success',
        text: 'Endereço adicionado com sucesso',
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      controllerSnack({
        title: 'Erro',
        type: 'error',
        text: 'Ocorreu um erro inesperado.',
      });
    }
  };

  const inputSX = {
    borderRadius: 20,
  };

  return (
    <form noValidate onSubmit={handleSubmit(submitForm)}>
      <Card sx={{ mb: 2, borderRadius: 2 }}>
        <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
          <Grid item>
            <TextField
              {...reg('name')}
              label="Nome"
              error={!!errors?.name}
              helperText={errors?.name?.message}
              sx={inputSX}
            />
          </Grid>
          <Grid item>
            <TextField
              {...reg('tipoPessoa')}
              defaultValue="pf"
              label="Tipo Pessoa"
              id="outlined-select"
              select
              sx={inputSX}
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
              sx={inputSX}
            />
          </Grid>
          <Grid item>
            <InputMask
              typeInput={watch('tipoPessoa') === 'pf' ? 'cpf' : 'cnpj'}
              control={control}
              name="cpfCnpj"
              label={watch('tipoPessoa') === 'pf' ? 'CPF' : 'CNPJ'}
              sx={inputSX}
            />
          </Grid>

          <Grid item>
            <InputMask
              typeInput="celPhone"
              control={control}
              name="celular"
              label="Celular"
              sx={inputSX}
            />
          </Grid>
          <Grid item>
            <InputMask
              typeInput="phone"
              control={control}
              name="telefone"
              label="Telefone"
              sx={inputSX}
            />
          </Grid>
          <Grid item>
            <TextField {...reg('email')} label="E-mail" sx={inputSX} />
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ mb: 2, borderRadius: 2 }}>
        {/* Endereços */}
        <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
          <Grid item>
            <TextField {...reg('ud')} label="Estado" sx={inputSX} />
          </Grid>
          <Grid item>
            <TextField {...reg('cidade')} label="Cidade" sx={inputSX} />
          </Grid>
          <Grid item>
            <TextField {...reg('bairro')} label="bairro" sx={inputSX} />
          </Grid>
          <Grid item>
            <TextField {...reg('rua')} label="Rua" />
          </Grid>
          <Grid item>
            <TextField {...reg('numero')} label="Número" sx={inputSX} />
          </Grid>
          <Grid item>
            <InputMask
              typeInput="cep"
              control={control}
              name="cep"
              label={'Cep'}
              sx={inputSX}
              onKeyUp={(e) => {
                handleChangeCep(e);
              }}
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
