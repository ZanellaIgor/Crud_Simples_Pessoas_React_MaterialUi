import * as yup from 'yup';
export const SchemaFormPessoa = yup.object().shape({
  nome: yup.string().required('Campo obrigatório'),
  cep: yup.string().required('Campo obrigatório'),
  cpfCnpj: yup.string().required('Campo obrigatório'),
});
