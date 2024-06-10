import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApiRequest } from '../../Hooks/useApiRequest';
import { TablePessoa } from '../../components/TablePessoa/Table.Pessoa.jsx';

export const ListPessoa = () => {
  const { id } = useParams();
  const { loading, error, response, makeRequest } = useApiRequest();

  const getPessoa = () => {
    const endpoint = `http://localhost:3000/pessoa`;
    const method = 'GET';

    makeRequest(endpoint, method)
      .then(() => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPessoa();
  }, []);

  return response && <TablePessoa register={response} />;
};
