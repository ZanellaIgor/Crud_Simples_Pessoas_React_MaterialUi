import axios from 'axios';
import { useState } from 'react';

export const useApiRequest = (
  initialUrl = '',
  initialMethod = '',
  initialData = ''
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const makeRequest = async (
    url = initialUrl,
    method = initialMethod,
    data = initialData
  ) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios({ url, method, data });
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, makeRequest };
};
