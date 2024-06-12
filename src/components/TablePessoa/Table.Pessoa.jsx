import { Edit } from '@mui/icons-material';
import {
  IconButton,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApiRequest } from '../../Hooks/useApiRequest';

export const TablePessoa = () => {
  const navigate = useNavigate();
  const { loading, error, response, makeRequest, totals } = useApiRequest();
  const [pagesTotals, setPagesTotals] = useState(1);
  const [page, setPage] = useState(1);
  const handleClick = (id) => {
    navigate(`/pessoa/form/${id}`);
  };

  const handleChange = (event, value) => {
    console.log(event.target, value);
    setPage(value);
  };
  const [register, setRegister] = useState([]);
  const getPessoa = async () => {
    const method = 'GET';
    const endpoint = `http://localhost:3000/pessoa?_page=${page}`;

    await makeRequest(endpoint, method);
  };

  useEffect(() => {
    getPessoa();
  }, [page]);

  useEffect(() => {
    setRegister(response);
    setPagesTotals(Math.ceil(totals / 10));
  }, [response]);

  return (
    !loading && (
      <>
        <TableContainer component={Paper} sx={{ bgcolor: '#E4E4EE' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: '#90AAEF' }}>Nome:</TableCell>
                <TableCell sx={{ bgcolor: '#90AAEF' }}>Contato</TableCell>
                <TableCell sx={{ bgcolor: '#90AAEF' }}>Cidade:</TableCell>
                <TableCell sx={{ bgcolor: '#90AAEF' }}>Bairro:</TableCell>
                <TableCell sx={{ bgcolor: '#90AAEF' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {register?.map((reg, index) => {
                return (
                  <TableRow
                    key={reg?.id + index}
                    sx={{
                      '&:hover': {
                        bgcolor: '#9EBDF9',
                      },
                    }}
                  >
                    <TableCell sx={{ padding: '.8rem' }}>{reg?.nome}</TableCell>
                    <TableCell sx={{ padding: '.8rem' }}>
                      {reg?.telefone ?? '' - reg?.celular ?? ''}
                    </TableCell>
                    <TableCell sx={{ padding: '.8rem' }}>
                      {reg?.cidade}
                    </TableCell>
                    <TableCell sx={{ padding: '.8rem' }}>
                      {reg?.bairro}
                    </TableCell>
                    <TableCell sx={{ padding: '.8rem' }}>
                      <IconButton onClick={() => handleClick(reg?.id)}>
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 2 }}
        >
          <Pagination count={pagesTotals} page={page} onChange={handleChange} />
        </Stack>
      </>
    )
  );
};
