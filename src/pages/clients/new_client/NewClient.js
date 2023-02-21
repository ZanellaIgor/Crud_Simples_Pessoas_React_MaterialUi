import React from 'react'
import axios from 'axios';
import { useState } from "react";

import './NewClient.css'

const NewClient = () => {
  const url = "http://localhost:3000/clientes/"


  const baseUrl = `https://viacep.com.br/ws/`
  const [cepCliente, setCepCliente] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [rua, setRua] = useState('');
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [ie, setIe] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');


  const [endereco, setEndereco] = useState({});

  function handleButtonForm(e) {
    e.preventDefault()

    const cliente = {
      nome,
      cpfCnpj,
      ie,
      celular,
      telefone,
      rua,
      complemento,
      numero,
      bairro,
      cidade,
      uf,
    }
    console.log(cliente)

    axios.post(url, cliente)
      .then(response => {
        console.log(response.data)
        this.setState(cliente)

      })
      .catch(error => console.log(error))
    console.log(cliente)
  }

  function handleButtonClick() {
    if (cepCliente.length === 8) {
      console.log(cepCliente)

      axios.get(`${baseUrl}${cepCliente}/json/`)
        .then((response) => {
          console.log("Deu bom")
          const api = response.data
          setEndereco(api);
          setBairro(api.bairro);
          setCidade(api.localidade);
          setUf(api.uf);
          setRua(api.logradouro);
        })
        .catch((error) => {
          console.error(error);
        })
    }
    else {
      console.log("Deu ruim")
    }
  }

  return (
    <div >
      <h1>Adicione um Cliente:</h1>
      <form className="container-form">
        <div className='container-dados-clientes'>
          <span>
            <label htmlFor='nome'>Nome: </label>
            <input id="nomeCliente" name="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
          </span>

          <span>
            <label htmlFor='cnpjcpf'>CPF/CNPJ: </label>
            <input id="cnpjCpfCliente" name="cnpjcpf" type="text" value={cpfCnpj} onChange={(event) => setCpfCnpj(event.target.value)} />
          </span>

          <span>
            <label htmlFor='ie'>Inscrição Estadual: </label>
            <input id="ieCliente" name="ie" type="text" value={ie} onChange={(event) => setIe(event.target.value)} />
          </span>

          <span>
            <label htmlFor='telefone'>Telefone: </label>
            <input id="telCliente" name="telefone" type="text" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
          </span>
          <span>
            <label htmlFor='celular'>Celular: </label>
            <input id="celularCliente" name="celular" type="text" value={celular} onChange={(event) => setCelular(event.target.value)} />
          </span>

          <span>
            <label htmlFor='cep'>CEP</label>
            <input id="cepClienteid" name="cep" type="text" value={cepCliente} onChange={(event) => setCepCliente(event.target.value)} /><button type="button" onClick={handleButtonClick}>Pesquisar</button>
          </span>

          <span>
            <label htmlFor='cidade'>Cidade: </label>
            <input id="cidadeCliente" name="cidade" type="text" value={cidade} onChange={(event) => setCidade(event.target.value)} />
          </span>

          <span>
            <label htmlFor='bairro'>Bairro: </label>
            <input id="bairroCliente" name="bairro" type="text" value={bairro} onChange={(event) => setBairro(event.target.value)} />
          </span>

          <span>
            <label htmlFor='estado'>Estado: </label>
            <input id="estadoCliente" name="estado" type="text" value={uf} onChange={(event) => setUf(event.target.value)} />
          </span>

          <span>
            <label htmlFor='rua'>Rua: </label>
            <input id="ruaCliente" name="rua" type="text" value={rua} onChange={(event) => setRua(event.target.value)} />
          </span>

          <span>
            <label htmlFor='complemento'>Complemento: </label>
            <input id="complementoCliente" name="complemento" type="text" value={complemento} onChange={(event) => setComplemento(event.target.value)} />
          </span>

          <span>
            <label htmlFor='numero'>Número: </label>
            <input id="numeroCliente" name="numero" type="text" value={numero} onChange={(event) => setNumero(event.target.value)} />
          </span>
        </div>

        <button onClick={handleButtonForm}>Enviar</button>

      </form>
    </div>
  )
}

export default NewClient