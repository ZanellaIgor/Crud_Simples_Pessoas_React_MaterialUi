import logo from './logo.svg';
import './App.css';
import Input from './components/Input';



function App() {
  return (
    <div className="App">   
      <Input label="Nome:" id="nomeCliente"  name="nome" type="text" />
      <Input label="CEP:" id="cepCliente"  name="CEP" type="number" />
      <Input label="Cidade:" id="cidadeCliente"  name="cidade" type="text" />
      <Input label="Bairro:" id="bairroCliente"  name="bairro" type="text" />
      <Input label="Complemento:" id="complementoCliente"  name="complemento" type="text" />
      <Input label="Número:" id="numeroCliente"  name="numero" type="number" />
    </div>
  );
}

export default App;
