import React from 'react'
import Input from '../../components/Input';

import './NewClient.css'

const NewClient = () => {
  return (
    <div >
      <h1>Adicione um Cliente:</h1>
      <form className="container-dados-clientes">
        <Input label="Nome:" id="nomeCliente" name="nome" type="text" />
        <Input label="CNPJ/CPF:" id="cnpjCpfCliente" name="cnpjcpf" type="number" />
        <Input label="Inscrição Estadual:" id="ieCliente" name="ie" type="number" />
        <Input label="Telefone:" id="telCliente" name="CEP" type="number" />
        <Input label="Celuar:" id="cepCliente" name="CEP" type="number" />
        <Input label="CEP:" id="cepCliente" name="CEP" type="number" /><button>F4</button>
        <Input label="Cidade:" id="cidadeCliente" name="cidade" type="text" />
        <Input label="Bairro:" id="bairroCliente" name="bairro" type="text" />
        <Input label="Complemento:" id="complementoCliente" name="complemento" type="text" />
        <Input label="Número:" id="numeroCliente" name="numero" type="number" />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default NewClient