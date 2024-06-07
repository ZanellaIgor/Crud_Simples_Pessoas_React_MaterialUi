import * as yup from 'yup';
export const SchemaFormClient = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  inscricaoEstadual: yup.string().required('Campo obrigatório'),
  cpfCnpj: yup.string().required('Campo obrigatório'),
});
