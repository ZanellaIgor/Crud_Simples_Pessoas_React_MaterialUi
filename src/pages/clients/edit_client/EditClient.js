import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import axios from 'axios';

import './EditClient.css'

const EditClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3001/clientes/" + id

  const baseUrl = `https://viacep.com.br/ws/`
  const [cep, setCep] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [rua, setRua] = useState('');
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('')
  const [ie, setIe] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const {
    register,
    handleSubmit, formState: { errors }
  } = useForm();

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        const api = response.data;
        setNome(api.nome);
        setCpfCnpj(api.cpfCnpj);
        setIe(api.ie);
        setCep(api.cep)
        setCelular(api.celular)
        setTelefone(api.telefone)
        setRua(api.rua)
        setComplemento(api.complemento)
        setNumero(api.numero)
        setBairro(api.bairro)
        setCidade(api.cidade)
        setUf(api.uf)
      })
      .catch((error) => {
        console.log(error);
      })
  },[url])

  const [endereco, setEndereco] = useState({});
  const [cliente, setCliente] = useState({});

  {/*Alterando o cliente*/ }
  function handleButtonForm(event) {
    const cliente = {
      nome,
      cpfCnpj,
      ie,
      cep,
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

    axios.patch(url, cliente)
      .then(response => {
        console.log(response.data)
        setCliente(cliente)
        alert("Cliente Editado")
        navigate('/pages/clients/list_client')

      })
      .catch(error => console.log(error))
    console.log(cliente)
  }

  const validateCpfCnpj = (value) => {
    console.log(value)
    if (isNaN(Number(value))) {
      return "Insira um número válido";
    } else if (value.length === 11 || value.length === 14) {
      return true
    }
    else {
      return "Verifique o campo!"
    }
  }
  
  const validateInEst = (ie) => {
    if (ie !== "ISENTO" && isNaN(Number(ie))) {
      return "Insira um número válido ou ISENTO";
    }
    return true;
  }


  {/*Informando o CEP pela pesquisa*/ }
  const addEndereco = (() => {
    axios.get(`${baseUrl}${(cep.replace(/\D/g, ""))}/json/`)
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
    const cepNumeros = cep.replace(/\D/g, "");

    setCep(cepNumeros);

    if (cepNumeros.length === 8) {
      addEndereco();
    }
    else {
      alert("Favor Verificar o CEP")
    }
  }
  return (
    <div className='container-new-client' >
      <h1>Edite</h1>
      <form className="container-form" onSubmit={handleSubmit(handleButtonForm)}>
        <div className='container-dados-clientes'>
          <span>
            <label htmlFor='nome'>Nome: </label>
            <input id="nomeCliente" name="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)} required />
          </span>

          <span>
            <label htmlFor='cpfCnpj'>CPF/CNPJ: </label>
            <input id="cnpjcpfClient" name="cpfCnpj" type="text"   
              {...register("cpfCnpj", { validate: validateCpfCnpj })} required
              value={cpfCnpj} onChange={(event) => setCpfCnpj(event.target.value)}
               />
            {errors.cpfCnpj && <p>{errors.cpfCnpj.message}</p>}
          </span>

          <span>
            <label htmlFor='inEst'>Inscrição Estadual: </label>
            <input id="ieCliente" name="inEst" type="text"
              {...register("inEst", { validate: validateInEst })} required
              value={ie} onChange={(event) => setIe(event.target.value)}
            />
            {errors.inEst && <p>{errors.inEst.message}</p>}
          </span>

          <span>
            <label htmlFor='telefone'>Telefone: </label>
            <input id="telCliente" name="telefone" type="tel" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
          </span>
          <span>
            <label htmlFor='celular'>Celular: </label>
            <input id="celularCliente" name="celular" type="tel" value={celular} onChange={(event) => setCelular(event.target.value)} />
          </span>

          <span>
            <label htmlFor='cep'>CEP</label>
            <input id="cepCliente" name="cep" type="text" required value={cep} onChange={(event) => setCep(event.target.value)} /><button type="button" onClick={handleButtonClick}>Pesquisar</button>
          </span>

          <span>
            <label htmlFor='cidade'>Cidade: </label>
            <input id="cidadeCliente" name="cidade" type="text" required value={cidade} onChange={(event) => setCidade(event.target.value)} />
          </span>

          <span>
            <label htmlFor='bairro'>Bairro: </label>
            <input id="bairroCliente" name="bairro" type="text" required value={bairro} onChange={(event) => setBairro(event.target.value)} />
          </span>

          <span>
            <label htmlFor='estado'>Estado: </label>
            <input id="estadoCliente" name="estado" type="text" required value={uf} onChange={(event) => setUf(event.target.value)} />
          </span>

          <span>
            <label htmlFor='rua'>Rua: </label>
            <input id="ruaCliente" name="rua" type="text" required value={rua} onChange={(event) => setRua(event.target.value)} />
          </span>

          <span>
            <label htmlFor='complemento'>Complemento: </label>
            <input id="complementoCliente" name="complemento" type="text" required value={complemento} onChange={(event) => setComplemento(event.target.value)} />
          </span>

          <span>
            <label htmlFor='numero'>Número: </label>
            <input id="numeroCliente" name="numero" type="text" required value={numero} onChange={(event) => setNumero(event.target.value)} />
          </span>
        </div>

        <button id='botao-envia-cliente' type="submit">Alterar</button>

      </form>
    </div>
  )
}

export default EditClient