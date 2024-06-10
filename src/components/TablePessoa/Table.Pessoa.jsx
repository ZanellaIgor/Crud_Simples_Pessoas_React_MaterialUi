import { Edit } from '@mui/icons-material';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const TablePessoa = ({ register }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/client/form/${id}`);
  };
  return (
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
              <TableCell>{reg?.telfone ?? '' - reg?.celular ?? ''}</TableCell>
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
  );
};
