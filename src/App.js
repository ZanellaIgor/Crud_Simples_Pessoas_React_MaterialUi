
import './App.css';
import NewClient from './pages/clients/new_client/NewClient';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <h1>Bem vindo:</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/clients/new_client' element={<NewClient />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
