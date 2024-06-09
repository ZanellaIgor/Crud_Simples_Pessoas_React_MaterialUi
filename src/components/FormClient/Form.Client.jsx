import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSnackbar } from '../../Hooks/useSnackBar';
import { InputField } from '../InputField/InputField';
import { InputSelect } from '../InputSelect/InputSelect';
import { InputMask } from '../InputsMask/Input.Mask';
import { SchemaFormClient } from './Form.Client.Schema';

export const FormClient = (register) => {
  const { controllerSnack } = useSnackbar();
  const { id } = useParams();
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
      tipoPessoa: register.tipoPessoa ?? 'pj',
    },
    resolver: yupResolver(SchemaFormClient),
  });
  console.log(id);
  const [cep, setCep] = useState('');
  const submitForm = (values) => {
    const url = `http://localhost:3000/pessoa/`;

    if (!id) {
      axios
        .post(url, values)
        .then((res) => {
          controllerSnack({
            open: true,
            title: 'Ok!',
            type: 'success',
            text: 'Pessoa Adicionada com sucesso',
          });
        })
        .catch((error) =>
          controllerSnack({
            open: true,
            title: 'Erro!',
            type: 'error',
            text: 'Não foi possivélo adicionar a pessoa. Tente novamente.',
          })
        );
    }
    if (id) {
      axios
        .put(`${url}${id}`, values)
        .then((res) => {
          controllerSnack({
            open: true,
            title: 'Ok!',
            type: 'success',
            text: 'Pessoa Atualizada com sucesso',
          });
        })
        .catch((error) =>
          controllerSnack({
            open: true,
            title: 'Erro!',
            type: 'error',
            text: 'Não foi possivélo atualizar a pessoa. Tente novamente.',
          })
        );
    }
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
        // Continue atualizando outros campos conforme necessário
      } catch (error) {
        controllerSnack({
          title: 'Erro',
          type: 'error',
          text: 'Ocorreu um erro inesperado.',
        });
      }
    };

    getAddress();
  }, [cep, setValue]); // Dependência do CEP e setValue para atualizar os campos do formulário

  const handleChangeCep = (event) => {
    const newCep = event.target.value.replace('-', '').replaceAll('_', '');
    setCep(newCep);
  };

  const inputSX = {
    borderRadius: 20,
  };

  return (
    <form noValidate onSubmit={handleSubmit(submitForm)}>
      <Card sx={{ mb: 2, borderRadius: 2 }}>
        <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
          <Grid item md={12}>
            <Typography variant="h6">Informações Pessoais</Typography>
          </Grid>
          <Grid item md={4}>
            <InputField
              fullWidth
              name="name"
              control={control}
              label="Nome"
              error={!!errors?.name}
              helperText={errors?.name?.message}
              sx={inputSX}
            />
          </Grid>
          <Grid item md={2}>
            <InputSelect
              fullWidth
              name="tipoPessoa"
              control={control}
              defaultValue="pj"
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
  );
};
