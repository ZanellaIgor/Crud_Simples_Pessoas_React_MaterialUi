import React from 'react'
import axios from 'axios';
import { useState } from "react";

import './NewClient.css'

const NewClient = () => {
  const baseUrl = `https://viacep.com.br/ws/`
  const [cepCliente, setCepCliente] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [rua, setRua] = useState({});

  const [endereco, setEndereco] = useState({});

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
      <form className="container-dados-clientes">
        <label htmlFor='nome'>Nome: </label>
        <input id="nomeCliente" name="nome" type="text" />

        <label htmlFor='cnpjcpf'>CNPJ/CNPJ: </label>
        <input id="cnpjCpfCliente" name="cnpjcpf" type="number" />

        <label htmlFor='ie'>Inscrição Estadual: </label>
        <input id="ieCliente" name="ie" type="text" />

        <label htmlFor='telefone'>Telefone: </label>
        <input id="telCliente" name="telefone" type="number" />

        <label htmlFor='celular'>Celuar: </label>
        <input id="celularCliente" name="celular" type="number" />

        <label htmlFor='cep'>CEP</label>
        <input id="cepClienteid" name="cep" type="text" onChange={(event) => setCepCliente(event.target.value)} /><button type="button" onClick={handleButtonClick}>F4</button>

        <label htmlFor='cidade'>Cidade: </label>
        <input id="cidadeCliente" name="cidade" type="text" value={cidade} onChange={(event) => setCidade(event.target.value)} />

        <label htmlFor='bairro'>Bairro: </label>
        <input id="bairroCliente" name="bairro" type="text" value={bairro} onChange={(event) => setBairro(event.target.value)} />

        <label htmlFor='estado'>Estado: </label>
        <input id="estadoCliente" name="estado" type="text" value={uf} onChange={(event) => setUf(event.target.value)} />

        <label htmlFor='rua'>Rua: </label>
        <input id="ruaCliente" name="rua" type="text" value={rua} onChange={(event) => setRua(event.target.value)} />

        <label htmlFor='complemento'>Complemento: </label>
        <input id="complementoCliente" name="complemento" type="text" value={endereco.complemento} />

        <label htmlFor='numero'>Número: </label>
        <input id="numeroCliente" name="numero" type="number" />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default NewClient