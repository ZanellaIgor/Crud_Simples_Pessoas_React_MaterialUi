import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./ListClient.css"


const ListClient = () => {

  const url = "http://localhost:3000/clientes/"
  const [clientes, setClientes] = useState([]);
  

  useEffect(() => {
    axios.get(url)
    .then((response)=>{
      setClientes(response.data)

    })
    .catch((error) => {
      console.log(error);
    })
  },[setClientes])

  return (
    <div>
      <h1>Clientes:</h1>
      
      <table className='container-tabela'>
        <thead>
          <tr>
            <th>Nome: </th>
            <th>CPF/CNPJ: </th>
            <th>Cidade: </th>
            <th>Estado: </th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id} className="container-cliente">
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