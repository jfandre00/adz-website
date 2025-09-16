// src/pages/admin/ProjectsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectsPage.css'; // Usaremos um CSS dedicado
import ProjectFormModal from '../../components/admin/ProjectFormModal';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Erro ao buscar obras:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSave = () => {
    fetchProjects();
  };

  const handleOpenAddModal = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Tem a certeza que deseja apagar esta obra?')) {
      try {
        await axios.delete(`http://localhost:5000/api/projects/${projectId}`);
        fetchProjects();
      } catch (error) {
        console.error('Erro ao apagar obra:', error);
      }
    }
  };

  return (
    <>
      <div className="admin-page-container">
        <div className="admin-page-header">
          <h1>Gestão de Obras</h1>
          <button className="add-new-btn" onClick={handleOpenAddModal}>
            + Adicionar Nova Obra
          </button>
        </div>
        <div className="admin-table-container">
          <table>
            <thead>
              <tr>
                <th>Nome da Obra</th>
                <th>Cliente</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map(project => (
                  <tr key={project.id}>
                    <td>{project.project_name}</td>
                    <td>{project.client_name}</td>
                    <td>{project.status}</td>
                    <td className="actions-cell">
                      <button className="action-btn edit" onClick={() => handleOpenEditModal(project)}>Editar</button>
                      <button className="action-btn delete" onClick={() => handleDeleteProject(project.id)}>Apagar</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Nenhuma obra encontrada.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        projectToEdit={editingProject}
      />
    </>
  );
};

export default ProjectsPage;
