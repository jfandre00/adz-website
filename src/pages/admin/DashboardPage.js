import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashboardPage.css';
import { FiUsers, FiBriefcase, FiFileText } from 'react-icons/fi';

const DashboardPage = () => {
  const [stats, setStats] = useState({ clients: 0, projects: 0, estimates: 0 });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentClients, setRecentClients] = useState([]); // <<< 1. NOVO ESTADO PARA CLIENTES

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientsRes, projectsRes, estimatesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/clients'),
          axios.get('http://localhost:5000/api/projects'),
          axios.get('http://localhost:5000/api/estimates'),
        ]);

        setStats({
          clients: clientsRes.data.length,
          projects: projectsRes.data.length,
          estimates: estimatesRes.data.length,
        });
        
        setRecentProjects(projectsRes.data.slice(0, 5));
        setRecentClients(clientsRes.data.slice(0, 5)); // <<< 2. GUARDAR OS CLIENTES RECENTES

      } catch (error) {
        console.error("Erro ao buscar dados para o dashboard:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Bem-vindo ao sistema de gestão da ADZ Construction Co.</p>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon clients"><FiUsers /></div>
          <div className="card-info"><h3>{stats.clients}</h3><p>Total de Clientes</p></div>
        </div>
        <div className="summary-card">
          <div className="card-icon projects"><FiBriefcase /></div>
          <div className="card-info"><h3>{stats.projects}</h3><p>Obras Ativas</p></div>
        </div>
        <div className="summary-card">
          <div className="card-icon estimates"><FiFileText /></div>
          <div className="card-info"><h3>{stats.estimates}</h3><p>Orçamentos Criados</p></div>
        </div>
      </div>

      <div className="recent-activity-grid">
        <div className="recent-list">
          <h2>Obras Recentes</h2>
          <ul>
            {recentProjects.length > 0 ? (
              recentProjects.map(project => (
                <li key={project.id}>
                  <span>{project.project_name}</span>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
                </li>
              ))
            ) : ( <p>Nenhuma obra encontrada.</p> )}
          </ul>
        </div>
        
        {/* <<< 3. ATUALIZAR A LISTA DE CLIENTES */}
        <div className="recent-list">
          <h2>Clientes Recentes</h2>
          <ul>
            {recentClients.length > 0 ? (
              recentClients.map(client => (
                <li key={client.id}>
                  <span>{client.full_name}</span>
                  <span>{client.email}</span>
                </li>
              ))
            ) : ( <p>Nenhum cliente encontrado.</p> )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;