import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit, formState: {errors} 
  } = useForm();

  const [endereco, setEndereco] = useState({});


  const validateinEst = (value) => {
    if (value !== "ISENTO" && isNaN(Number(value))) {
      return "Insira um número válido ou ISENTO";
    }
    return true;
  }

   {/*Adicionando cliente*/}
  function handleButtonForm(e) {
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

  {/*Informando o CEP pela pesquisa*/}
  const addEndereco = (() => {
    axios.get(`${baseUrl}${(cepCliente.replace(/\D/g, ""))}/json/`)

      .then((response) => {

        const api = response.data
        setEndereco(api);
        setBairro(api.bairro);
        setCidade(api.localidade);
        setUf(api.uf);
        setRua(api.logradouro);
      })
      .catch((error) => {
        alert(error);
      })
  })
  
  
  function handleButtonClick() {
    const cepNumeros = cepCliente.replace(/\D/g, "");

    setCepCliente(cepNumeros);
    console.log(cepCliente)

    if (cepNumeros.length === 8) {
      addEndereco();
    }
    else {
      alert("Favor Verificar o CEP")
    }
  }

  return (
    <div className='container-new-client' >
      <h1>Adicione um Cliente:</h1>
      <form className="container-form"  onSubmit={handleSubmit(handleButtonForm)}>
        <div className='container-dados-clientes'>
          <span>
            <label htmlFor='nome'>Nome: </label>
            <input id="nomeCliente" name="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)}  required/>
          </span>

          <span>
            <label htmlFor='cnpjcpf'>CPF/CNPJ: </label>
            <input id="cnpjCpfCliente" name="cnpjcpf" type="text" 
            value={cpfCnpj} onChange={(event) => setCpfCnpj(event.target.value)}  required
            />
          </span>

          <span>
            <label htmlFor='inEst'>Inscrição Estadual: </label>
            <input id="ieCliente" name="inEst" type="text" {...register("inEst", { validate: validateinEst })} required value={ie} onChange={(event) => setIe(event.target.value)}
             />
            {errors.inEst && <p>{errors.inEst.message}</p>}
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

        <button id='botao-envia-cliente' type="submit">Enviar</button>

      </form>
    </div>
  )
}

export default NewClient