// src/components/admin/EstimateFormModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EstimateFormModal = ({ isOpen, onClose, onSave, estimateToEdit }) => {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  const initialFormState = {
    client_id: '',
    project_id: '',
    status: 'Rascunho',
    items: [{ description: '', quantity: 1, unit: 'un', unit_price: 0 }]
  };
  const [formData, setFormData] = useState(initialFormState);
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isEditMode = estimateToEdit !== null;

  useEffect(() => {
    const fetchInitialData = async () => {
      if (isOpen) {
        try {
          const [clientsRes, projectsRes] = await Promise.all([
            axios.get('http://localhost:5000/api/clients'),
            axios.get('http://localhost:5000/api/projects')
          ]);
          setClients(clientsRes.data);
          setProjects(projectsRes.data);

          if (isEditMode) {
            // Se estiver a editar, busca os detalhes completos do orçamento
            const estimateRes = await axios.get(`http://localhost:5000/api/estimates/${estimateToEdit.id}`);
            setFormData({ ...estimateRes.data, project_id: estimateRes.data.project_id || '' });
          } else {
            setFormData(initialFormState);
          }
        } catch (err) {
          console.error("Erro ao buscar dados para o formulário.", err);
          setError('Não foi possível carregar os dados.');
        }
      }
    };
    fetchInitialData();
  }, [isOpen, isEditMode, estimateToEdit]);

  useEffect(() => {
    if (formData.client_id) {
      setFilteredProjects(projects.filter(p => p.client_id === parseInt(formData.client_id)));
    } else {
      setFilteredProjects([]);
    }
  }, [formData.client_id, projects]);


  if (!isOpen) return null;

  const handleMainChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleItemChange = (index, e) => {
    const newItems = [...formData.items];
    newItems[index][e.target.name] = e.target.value;
    setFormData({ ...formData, items: newItems });
  };
  const handleAddItem = () => setFormData({ ...formData, items: [...formData.items, { description: '', quantity: 1, unit: 'un', unit_price: 0 }] });
  const handleRemoveItem = (index) => {
    const newItems = [...formData.items];
    newItems.splice(index, 1);
    setFormData({ ...formData, items: newItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/api/estimates/${estimateToEdit.id}`, formData);
        setSuccess('Orçamento atualizado com sucesso!');
      } else {
        await axios.post('http://localhost:5000/api/estimates', formData);
        setSuccess('Orçamento criado com sucesso!');
      }
      onSave();
      setTimeout(() => onClose(), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Ocorreu um erro.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
        <h2>{isEditMode ? 'Editar Orçamento' : 'Criar Novo Orçamento'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Cliente *</label>
              <select name="client_id" value={formData.client_id} onChange={handleMainChange} required>
                <option value="">Selecione um cliente</option>
                {clients.map(client => (<option key={client.id} value={client.id}>{client.full_name}</option>))}
              </select>
            </div>
            <div className="form-group">
              <label>Obra Associada</label>
              <select name="project_id" value={formData.project_id} onChange={handleMainChange} disabled={!formData.client_id}>
                <option value="">Selecione uma obra (opcional)</option>
                {filteredProjects.map(project => (<option key={project.id} value={project.id}>{project.project_name}</option>))}
              </select>
            </div>
          </div>
          <div className="form-group">
              <label>Status</label>
              <select name="status" value={formData.status} onChange={handleMainChange}>
                  <option value="Rascunho">Rascunho</option>
                  <option value="Enviado">Enviado</option>
                  <option value="Aprovado">Aprovado</option>
                  <option value="Rejeitado">Rejeitado</option>
              </select>
          </div>
          
          <div className="items-section">
            <h3>Itens do Orçamento</h3>
            {formData.items.map((item, index) => (
              <div key={index} className="item-row">
                <input type="text" name="description" placeholder="Descrição" value={item.description} onChange={(e) => handleItemChange(index, e)} required />
                <input type="number" name="quantity" placeholder="Qtd." value={item.quantity} onChange={(e) => handleItemChange(index, e)} min="0" />
                <input type="text" name="unit" placeholder="Unid." value={item.unit} onChange={(e) => handleItemChange(index, e)} />
                <input type="number" name="unit_price" placeholder="Preço Unit." value={item.unit_price} onChange={(e) => handleItemChange(index, e)} min="0" step="0.01" />
                <button type="button" className="remove-item-btn" onClick={() => handleRemoveItem(index)}>×</button>
              </div>
            ))}
            <button type="button" className="add-item-btn" onClick={handleAddItem}>+ Adicionar Item</button>
          </div>

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-save">{isEditMode ? 'Guardar Alterações' : 'Guardar Orçamento'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimateFormModal;