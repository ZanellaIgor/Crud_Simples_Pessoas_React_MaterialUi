import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import axios from 'axios'

import "./ListClient.css"
import { Link } from 'react-router-dom'


const ListClient = () => {

  const url = "http://localhost:3000/clientes/"

  const [clientes, setClientes] = useState([]);

  const handleButtonDelete = (id) => {
    if (window.confirm('Tem certeza que deseja deletar este Cliente?')) {
      axios.delete(`${url}/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setClientes(response.data)

      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='container-list-client'>
      <h1>Clientes:</h1>

      <table className='container-tabela'>
        <thead>
          <tr>
            <th>Alterar/Excluir</th>
            <th>Nome </th>
            <th>CPF/CNPJ </th>
            <th>Cidade </th>
            <th>Estado </th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id} className="container-cliente">
              <td className='container-button-action'>
                <Link to={`/pages/clients/${cliente.id}/edit_client`}>
                <button className='container-button-edit'><AiFillEdit />
                </button></Link>
                <button className="container-delete-cliente" onClick={() => handleButtonDelete(cliente.id)}>
                  <AiFillDelete /></button >
                </td>
              <td>{cliente.nome}</td>
              <td>{cliente.cpfCnpj}</td>
              <td>{cliente.cidade}</td>
              <td>{cliente.uf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListClient