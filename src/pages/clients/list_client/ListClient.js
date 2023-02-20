import React from 'react'
import "./ListClient.css"


const ListClient = () => {
  const clientes = [{
    id: 1,
    nome: "Roberval",
    cpfCnpj: 123456889,
    ie: "ISENTO",
    celular: 54953542,
    telefone: 32155,
    rua: "Rua das Graças",
    complemento: 12321,
    numero: 123,
    bairro: "Centro",
    cidade: "São Pedro",
    uf: "SC",
  }, {
    id: 2,
    nome: "Ig",
    cpfCnpj: 553456889,
    ie: "ISENTO",
    celular: 115953542,
    telefone: 32155,
    rua: "Rua das Graças",
    complemento: 12321,
    numero: 125,
    bairro: "Bragantino",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: 3,
    nome: "Jacaré",
    cpfCnpj: 553456889,
    ie: 1235485,
    celular: 115953542,
    telefone: 5132155,
    rua: "Rua das Marechal Floriano",
    complemento: 12321,
    numero: 125,
    bairro: "Bela Vista",
    cidade: "Carandiru",
    uf: "RJ",
  }
  ]
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