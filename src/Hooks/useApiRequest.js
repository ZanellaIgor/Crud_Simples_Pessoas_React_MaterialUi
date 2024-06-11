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
  const [totals, setTotals] = useState(0);

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
      setResponse(res?.data);
      setTotals(parseInt(res?.headers['x-total-count'], 10));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, makeRequest, totals };
};
