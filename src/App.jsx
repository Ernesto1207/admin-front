import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import Reportes from './pages/Reportes';
import Productos from './pages/Productos';
import Categoria from './pages/Categoria';
import Mesas from './pages/Mesas';
import Pedidos from './pages/Pedidos';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categorias" element={<Categoria />} />
          <Route path="/mesas" element={<Mesas />} />
          <Route path="/pedidos" element={<Pedidos />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
