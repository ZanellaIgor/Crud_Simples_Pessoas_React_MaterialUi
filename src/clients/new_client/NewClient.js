import React from 'react'
import InputField from '../../components/Input';
import axios from 'axios';
import { useState , useEffect} from "react";

import './NewClient.css'

const NewClient = () => {
  const baseUrl = `https://viacep.com.br/ws/`
  const [cepCliente, setCepCliente] = useState();



  function handleCepEvent(event) {
    setCepCliente(event.target.value)
    
    if (cepCliente.length == 8) {
      console.log("deu certo")
      console.log(cepCliente)

      axios.get(`https://viacep.com.br/ws/01001000/json/`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      console.log("Está faltando Caractere ou há demais")
    }
  }

  return (
    <div >
      <h1>Adicione um Cliente:</h1>
      <form className="container-dados-clientes">
        <InputField label="Nome:" id="nomeCliente" name="nome" type="text" />
        <InputField label="CNPJ/CPF:" id="cnpjCpfCliente" name="cnpjcpf" type="number" />
        <InputField label="Inscrição Estadual:" id="ieCliente" name="ie" type="text" />
        <InputField label="Telefone:" id="telCliente" name="telefone" type="number" />
        <InputField label="Celuar:" id="celularCliente" name="celular" type="number" />
        <InputField label="CEP:" id="cepCliente" name="cep" type="text" onChange={handleCepEvent} /><button type="button" >F4</button>
        <InputField label="Cidade:" id="cidadeCliente" name="cidade" type="text" />
        <InputField label="Bairro:" id="bairroCliente" name="bairro" type="text" />
        <InputField label="Estado:" id="estadoCliente" name="estado" type="text" />
        <InputField label="Complemento:" id="complementoCliente" name="complemento" type="text" />
        <InputField label="Número:" id="numeroCliente" name="numero" type="number" />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default NewClient