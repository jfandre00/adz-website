// src/pages/admin/ClientsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ClientsPage.css';
import ClientFormModal from '../../components/admin/ClientFormModal';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null); // Estado para o cliente em edição

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSave = () => {
    fetchClients(); // Atualiza a lista após adicionar ou editar
  };

  const handleOpenAddModal = () => {
    setEditingClient(null); // Garante que o formulário estará em modo "adicionar"
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (client) => {
    setEditingClient(client); // Define o cliente a ser editado
    setIsModalOpen(true);
  };

  const handleDeleteClient = async (clientId) => {
    // Usamos window.confirm para uma confirmação simples
    if (window.confirm('Tem a certeza que deseja apagar este cliente?')) {
      try {
        await axios.delete(`http://localhost:5000/api/clients/${clientId}`);
        fetchClients(); // Atualiza a lista após apagar
      } catch (error) {
        console.error('Erro ao apagar cliente:', error);
      }
    }
  };

  return (
    <>
      <div className="admin-page-container">
        <div className="admin-page-header">
          <h1>Gestão de Clientes</h1>
          <button className="add-new-btn" onClick={handleOpenAddModal}>
            + Adicionar Novo Cliente
          </button>
        </div>

        <div className="admin-table-container">
          <table>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>Email</th>
                <th>Telefone Principal</th>
                <th>Empresa</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                clients.map(client => (
                  <tr key={client.id}>
                    <td>{client.full_name}</td>
                    <td>{client.email}</td>
                    <td>{client.primary_phone}</td>
                    <td>{client.company || 'N/A'}</td>
                    <td className="actions-cell">
                      <button className="action-btn edit" onClick={() => handleOpenEditModal(client)}>Editar</button>
                      <button className="action-btn delete" onClick={() => handleDeleteClient(client.id)}>Apagar</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Nenhum cliente encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ClientFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onClientAdded={handleSave}
        onClientUpdated={handleSave}
        clientToEdit={editingClient}
      />
    </>
  );
};

export default ClientsPage;