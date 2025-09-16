// src/components/admin/ClientFormModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientFormModal = ({ isOpen, onClose, onClientAdded, onClientUpdated, clientToEdit }) => {
  const [formData, setFormData] = useState({ full_name: '', company: '', email: '', primary_phone: '', full_address: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isEditMode = clientToEdit !== null;

  useEffect(() => {
    if (isEditMode) {
      setFormData(clientToEdit);
    } else {
      setFormData({ full_name: '', company: '', email: '', primary_phone: '', full_address: '' });
    }
  }, [clientToEdit, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/api/clients/${clientToEdit.id}`, formData);
        setSuccess('Cliente atualizado com sucesso!');
        onClientUpdated();
      } else {
        await axios.post('http://localhost:5000/api/clients', formData);
        setSuccess('Cliente adicionado com sucesso!');
        onClientAdded();
      }

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
        <h2>{isEditMode ? 'Editar Cliente' : 'Adicionar Novo Cliente'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome Completo *</label>
            <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Empresa</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Telefone Principal *</label>
            <input type="text" name="primary_phone" value={formData.primary_phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Endereço</label>
            <textarea name="full_address" value={formData.full_address} onChange={handleChange}></textarea>
          </div>
          
          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-save">{isEditMode ? 'Guardar Alterações' : 'Guardar Cliente'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientFormModal;