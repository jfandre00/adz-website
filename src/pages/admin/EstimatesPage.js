import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EstimatesPage.css';
import EstimateFormModal from '../../components/admin/EstimateFormModal';

const EstimatesPage = () => {
  const [estimates, setEstimates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEstimate, setEditingEstimate] = useState(null);

  const fetchEstimates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/estimates');
      setEstimates(response.data);
    } catch (error) {
      console.error('Erro ao buscar orçamentos:', error);
    }
  };

  useEffect(() => {
    fetchEstimates();
  }, []);

  const handleSave = () => {
    fetchEstimates();
  };
  
  const handleDelete = async (id) => {
      if (window.confirm('Tem a certeza que deseja apagar este orçamento?')) {
          try {
              await axios.delete(`http://localhost:5000/api/estimates/${id}`);
              fetchEstimates();
          } catch (error) {
              console.error('Erro ao apagar orçamento:', error);
          }
      }
  };

  const handleOpenAddModal = () => {
    setEditingEstimate(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (estimate) => {
    setEditingEstimate(estimate);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="admin-page-container">
        <div className="admin-page-header">
          <h1>Gestão de Orçamentos</h1>
          <button className="add-new-btn" onClick={handleOpenAddModal}>
            + Criar Novo Orçamento
          </button>
        </div>

        <div className="admin-table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Obra</th>
                <th>Valor Total</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {estimates.length > 0 ? (
                estimates.map(estimate => (
                  <tr key={estimate.id}>
                    <td>#{estimate.id}</td>
                    <td>{estimate.client_name}</td>
                    <td>{estimate.project_name || 'N/A'}</td>
                    <td>${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(estimate.total_value)}</td>
                    <td>{estimate.status}</td>
                    <td className="actions-cell">
                      <button className="action-btn edit" onClick={() => handleOpenEditModal(estimate)}>Ver/Editar</button>
                      <button className="action-btn delete" onClick={() => handleDelete(estimate.id)}>Apagar</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Nenhum orçamento encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <EstimateFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        estimateToEdit={editingEstimate}
      />
    </>
  );
};

export default EstimatesPage;