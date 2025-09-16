// src/components/admin/ProjectFormModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectFormModal = ({ isOpen, onClose, onSave, projectToEdit }) => {
  const [formData, setFormData] = useState({ project_name: '', client_id: '', status: 'Planeamento' });
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isEditMode = projectToEdit !== null;

  useEffect(() => {
    // Busca a lista de clientes para preencher o dropdown
    const fetchClients = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/clients');
        setClients(res.data);
      } catch (err) {
        console.error("Erro ao buscar clientes para o formulário.", err);
      }
    };

    if (isOpen) {
      fetchClients();
      if (isEditMode) {
        setFormData(projectToEdit);
      } else {
        setFormData({ project_name: '', client_id: '', status: 'Planeamento' });
      }
    }
  }, [projectToEdit, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/api/projects/${projectToEdit.id}`, formData);
        setSuccess('Obra atualizada com sucesso!');
      } else {
        await axios.post('http://localhost:5000/api/projects', formData);
        setSuccess('Obra adicionada com sucesso!');
      }
      onSave();
      setTimeout(() => {
        onClose();
        setSuccess('');
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Ocorreu um erro.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{isEditMode ? 'Editar Obra' : 'Adicionar Nova Obra'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome da Obra *</label>
            <input type="text" name="project_name" value={formData.project_name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Cliente *</label>
            <select name="client_id" value={formData.client_id} onChange={handleChange} required>
              <option value="">Selecione um cliente</option>
              {clients.map(client => (
                <option key={client.id} value={client.id}>{client.full_name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Status *</label>
            <select name="status" value={formData.status} onChange={handleChange} required>
              <option value="Planeamento">Planeamento</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </div>
          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-save">{isEditMode ? 'Guardar Alterações' : 'Guardar Obra'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectFormModal;