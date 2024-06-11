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
    navigate(`/client/form/${id}`);
  };
  console.log(totals, ' totals');

  const handleChange = (event, value) => {
    console.log(event.target, value);
    setPage(value);
  };
  const [register, setRegister] = useState([]);
  console.log(response);

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
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Nome:</TableCell>
                <TableCell>Contato</TableCell>
                <TableCell>Cidade:</TableCell>
                <TableCell>Bairro:</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {register?.map((reg, index) => {
                return (
                  <TableRow key={reg?.id + index}>
                    <TableCell>{reg?.nome}</TableCell>
                    <TableCell>
                      {reg?.telefone ?? '' - reg?.celular ?? ''}
                    </TableCell>
                    <TableCell>{reg?.cidade}</TableCell>
                    <TableCell>{reg?.bairro}</TableCell>
                    <TableCell>
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
