import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApiRequest } from '../../Hooks/useApiRequest';
import { FormPessoa } from '../../components/FormPessoa/Form.Pessoa';

export const EditPessoa = () => {
  const { id } = useParams();
  const { loading, error, response, makeRequest } = useApiRequest();

  const getPessoa = () => {
    const endpoint = `http://localhost:3000/pessoa/${id}`;
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

  return (
    response && (
      <div>
        <FormPessoa register={response} id={id} />
      </div>
    )
  );
};
