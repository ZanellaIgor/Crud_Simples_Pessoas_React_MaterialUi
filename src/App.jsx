import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormPessoa } from './components/FormPessoa/Form.Pessoa';
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
          <Route path="/pessoa/" element={<ListPessoa />} />
          <Route path="/pessoa/form" element={<FormPessoa />} />
          <Route path="/pessoa/form/:id" element={<EditPessoa />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
