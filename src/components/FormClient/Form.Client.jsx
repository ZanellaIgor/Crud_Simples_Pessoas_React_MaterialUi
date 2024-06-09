import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from '../../Hooks/useSnackBar';
import { InputField } from '../InputField/InputField';
import { InputSelect } from '../InputSelect/InputSelect';
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
    setValue,
  } = useForm({
    defaultValues: { ...register },
    resolver: yupResolver(SchemaFormClient),
  });
  const [cep, setCep] = useState('');
  const submitForm = (values) => {
    console.log(values);
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
          <Grid item>
            <InputField
              name="name"
              control={control}
              label="Nome"
              error={!!errors?.name}
              helperText={errors?.name?.message}
              sx={inputSX}
            />
          </Grid>
          <Grid item>
            {/*         <InputField
              name="tipoPessoa"
              control={control}
              defaultValue="pf"
              label="Tipo Pessoa"
              id="outlined-select"
              select
              sx={inputSX}
            >
              <MenuItem value="pf">Física</MenuItem>
              <MenuItem value={'pj'}>Jurídica</MenuItem>
            </InputField> */}
            <InputSelect
              name="tipoPessoa"
              control={control}
              defaultValue="pf"
              label="Tipo Pessoa"
              options={[
                { value: 'pf', label: 'Física' },
                { value: 'pj', label: 'Jurídica' },
              ]}
            />
          </Grid>
          <Grid item>
            <InputField
              name="inscricaoEstadual"
              control={control}
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
            <InputField
              name="email"
              control={control}
              label="E-mail"
              sx={inputSX}
            />
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ mb: 2, borderRadius: 2 }}>
        {/* Endereços */}
        <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
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
          <Grid item>
            <InputField
              control={control}
              name="cidade"
              label="Cidade"
              sx={inputSX}
            />
          </Grid>

          <Grid item>
            <InputField name="rua" control={control} label="Rua" />
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
            />
          </Grid>
          <Grid item>
            <InputField
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
