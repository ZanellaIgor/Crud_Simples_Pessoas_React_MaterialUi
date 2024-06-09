import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FormClient } from './components/FormClient/Form.Client';
import Layout from './components/layout/Layout';
import { Home } from './pages/Home';
import ListClient from './pages/clients/list_client/ListClient';
import { EditPessoa } from './pages/pessoa/EditPessoa';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/client/" element={<ListClient />} />
          <Route path="/client/form" element={<FormClient />} />
          <Route path="/client/form/:id" element={<EditPessoa />} />
          {/*  <Route path="/client/form/:id/" element={<Home />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
