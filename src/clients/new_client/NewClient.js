import React from 'react'
import InputField from '../../components/Input';
import axios from 'axios';
import { useState, useEffect } from "react";

import './NewClient.css'

const NewClient = () => {
  const baseUrl = `https://viacep.com.br/ws/`
  const [cepCliente, setCepCliente] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [endereco, setEndereco] = useState({});

  const [formValues, setFormValues] = useState({
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  function handleButtonClick() {
    if (cepCliente.length === 8) {
      console.log(cepCliente)
      axios.get(`${baseUrl}${cepCliente}/json/`)
        .then((response) => {
          console.log("Deu bom")
          setEndereco(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        })
    }
    else {
      console.log("Deu ruim")
    }

  }

  {/*function handleCepEvent(event) {
    setCepCliente(event.target.value)
    
    if (event.target.value.length === 8) {
      console.log("deu certo")
      console.log(event.target.value.length)

      axios.get(`https://viacep.com.br/ws/${event.target.value}/json/`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      console.log("Está faltando Caractere ou há demais")
    }
  }*/}

  return (
    <div >
      <h1>Adicione um Cliente:</h1>
      <form className="container-dados-clientes">
        <InputField label="Nome:" id="nomeCliente" name="nome" type="text" />
        <InputField label="CNPJ/CPF:" id="cnpjCpfCliente" name="cnpjcpf" type="number" />
        <InputField label="Inscrição Estadual:" id="ieCliente" name="ie" type="text" />
        <InputField label="Telefone:" id="telCliente" name="telefone" type="number" />
        <InputField label="Celuar:" id="celularCliente" name="celular" type="number" />
        <InputField label="CEP:" id="cepClienteid" name="cep" type="text" onChange={(event) => setCepCliente(event.target.value)} /><button type="button" onClick={handleButtonClick}>F4</button>
        <InputField label="Cidade:" id="cidadeCliente" name="cidade" type="text" value={endereco.localidade} />
        <InputField label="Bairro:" id="bairroCliente" name="bairro" type="text" value={endereco.bairro} />
        <InputField label="Estado:" id="estadoCliente" name="estado" type="text" value={endereco.uf} />
        <InputField label="Rua:" id="ruaCliente" name="rua" type="text" value={endereco.logradouro} />
        <InputField label="Complemento:" id="complementoCliente" name="complemento" type="text" value={endereco.complemento} />
        <InputField label="Número:" id="numeroCliente" name="numero" type="number" />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default NewClient