import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes de Layout
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdminLayout from './components/admin/AdminLayout'; // <<< IMPORTANDO O NOVO LAYOUT

// Utilitários
import ScrollToTop from './utils/ScrollToTop';

// Páginas Públicas
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProcessPage from './pages/ProcessPage/ProcessPage';
import ContactPage from './pages/ContactPage/ContactPage';

// Páginas do Sistema de Gestão
import DashboardPage from './pages/admin/DashboardPage';
import ClientsPage from './pages/admin/ClientsPage';
import ProjectsPage from './pages/admin/ProjectsPage';
import EstimatesPage from './pages/admin/EstimatesPage';
import LoginPage from './pages/LoginPage';

// Componente para proteger as rotas
const PrivateRoute = ({ children }) => {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rotas Públicas */}
        <Route path="/*" element={<PublicLayout />} />
        
        {/* Rotas do Sistema (agora protegidas) */}
        <Route path="/admin/*" element={
          <PrivateRoute>
            <AdminRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

// Componente para agrupar as rotas públicas
const PublicLayout = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
    <Footer />
  </>
);

// Componente para agrupar as rotas do sistema
const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/estimates" element={<EstimatesPage />} />
    </Route>
  </Routes>
);

export default App;