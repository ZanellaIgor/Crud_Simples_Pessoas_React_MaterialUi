import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FormClient } from './components/FormClient/Form.Client';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import NotFoundPage from './pages/notFound/NotFound';
import { EditPessoa } from './pages/pessoa/EditPessoa';
import { ListPessoa } from './pages/pessoa/ListPessoa';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/client/" element={<ListPessoa />} />
          <Route path="/client/form" element={<FormClient />} />
          <Route path="/client/form/:id" element={<EditPessoa />} />
          <Route path="*" element={<NotFoundPage />} />
          {/*  <Route path="/client/form/:id/" element={<Home />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
