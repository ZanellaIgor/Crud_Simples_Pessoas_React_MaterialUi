import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useApiRequest } from '../../Hooks/useApiRequest';
import { useSnackbar } from '../../Hooks/useSnackBar';
import { InputField } from '../InputField/InputField';
import { InputSelect } from '../InputSelect/InputSelect';
import { InputMask } from '../InputsMask/Input.Mask';
import { SchemaFormClient } from './Form.Client.Schema';

export const FormClient = ({ register, id }) => {
  const { controllerSnack } = useSnackbar();
  const { loading, error, response, makeRequest } = useApiRequest();

  const {
    handleSubmit,
    register: reg,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      ...register,
      tipoPessoa: register?.tipoPessoa ?? 'pj',
    },
    resolver: yupResolver(SchemaFormClient),
  });

  const [cep, setCep] = useState('');
  const submitForm = (values) => {
    const url = `http://localhost:3000/pessoa/`;
    const method = id ? 'PUT' : 'POST';
    const endpoint = id ? `${url}${id}` : url;

    makeRequest(endpoint, method, values)
      .then(() => {
        controllerSnack({
          open: true,
          title: 'Ok!',
          type: 'success',
          text: id
            ? 'Pessoa Atualizada com sucesso'
            : 'Pessoa Adicionada com sucesso',
        });
      })
      .catch((error) => {
        controllerSnack({
          open: true,
          title: 'Erro!',
          type: 'error',
          text: id
            ? 'Não foi possível atualizar a pessoa. Tente novamente.'
            : 'Não foi possível adicionar a pessoa. Tente novamente.',
        });
      });
  };

  useEffect(() => {
    const getAddress = async () => {
      if (!cep || cep.length !== 8) return; // Verifica se o CEP é válido
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        if (response.data.erro)
          return controllerSnack({
            title: 'Erro',
            type: 'error',
            text: 'Não foi encontrado este Cep.',
          });
        controllerSnack({
          open: true,
          title: 'Ok!',
          type: 'success',
          text: 'Endereço buscado com sucesso',
        });
        //setAddress(response.data);
        console.log(response.data);

        setValue('uf', response?.data?.uf);
        setValue('complemento', response?.data?.complemento);
        setValue('bairro', response?.data?.bairro);
        setValue('cidade', response?.data?.localidade);
      } catch (error) {
        controllerSnack({
          title: 'Erro',
          type: 'error',
          text: 'Ocorreu um erro inesperado.',
        });
      }
    };

    getAddress();
  }, [cep, setValue]);

  const handleChangeCep = (event) => {
    const newCep = event.target.value.replace('-', '').replaceAll('_', '');
    if (!newCep || newCep.length !== 8) return;
    setCep(newCep);
  };

  const inputSX = {
    borderRadius: 20,
  };

  return (
    <>
      <Typography fontWeight={600} fontSize="1.2rem" display>
        {id ? 'Editar Pessoa' : 'Adicionar Pessoa'}
      </Typography>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <Card sx={{ mb: 2, borderRadius: 2 }}>
          <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
            <Grid item md={12}>
              <Typography variant="h6">Informações Pessoais</Typography>
            </Grid>
            <Grid item md={4}>
              <InputField
                fullWidth
                name="nome"
                control={control}
                label="Nome"
                error={!!errors?.nome}
                helperText={errors?.nome?.message}
                sx={inputSX}
              />
            </Grid>
            <Grid item md={2}>
              <InputSelect
                fullWidth
                name="tipoPessoa"
                control={control}
                label="Tipo Pessoa"
                options={[
                  { value: 'pf', label: 'Física' },
                  { value: 'pj', label: 'Jurídica' },
                ]}
              />
            </Grid>
            <Grid item md={3}>
              <InputField
                fullWidth
                name="inscricaoEstadual"
                control={control}
                label="Inscrição Estadual"
                error={!!errors?.inscricaoEstadual}
                helperText={errors?.inscricaoEstadual?.message}
                sx={inputSX}
              />
            </Grid>
            <Grid item md={3}>
              <InputMask
                fullWidth
                typeInput={watch('tipoPessoa') === 'pf' ? 'cpf' : 'cnpj'}
                control={control}
                name="cpfCnpj"
                label={watch('tipoPessoa') === 'pf' ? 'CPF' : 'CNPJ'}
                sx={inputSX}
              />
            </Grid>

            <Grid item>
              <InputMask
                fullWidth
                typeInput="celPhone"
                control={control}
                name="celular"
                label="Celular"
                sx={inputSX}
              />
            </Grid>
            <Grid item>
              <InputMask
                fullWidth
                typeInput="phone"
                control={control}
                name="telefone"
                label="Telefone"
                sx={inputSX}
              />
            </Grid>
            <Grid item>
              <InputField
                fullWidth
                name="email"
                control={control}
                label="E-mail"
                sx={inputSX}
              />
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ mb: 2, borderRadius: 2 }}>
          <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
            <Grid item md={12}>
              <Typography variant="h6">Endereço</Typography>
            </Grid>
            <Grid item>
              <InputMask
                fullWidth
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
            <Grid item>
              <InputField
                fullWidth
                control={control}
                name="cidade"
                label="Cidade"
                sx={inputSX}
              />
            </Grid>

            <Grid item>
              <InputField fullWidth name="rua" control={control} label="Rua" />
            </Grid>
            <Grid item>
              <InputField
                name="numero"
                control={control}
                label="Número"
                sx={inputSX}
              />
            </Grid>
            <Grid item>
              <InputField
                name="bairro"
                control={control}
                label="bairro"
                sx={inputSX}
                fullWidth
              />
            </Grid>
            <Grid item>
              <InputField
                fullWidth
                name="uf"
                control={control}
                label="UF"
                sx={inputSX}
                inputRef={reg('uf')}
                InputLabelProps={{ shrink: true }}
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
    </>
  );
};
