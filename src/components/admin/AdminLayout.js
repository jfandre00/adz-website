// src/components/admin/AdminLayout.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayout.css';
import { FiGrid, FiUsers, FiBriefcase, FiFileText } from 'react-icons/fi';

const AdminLayout = () => {
  return (
    <div className="admin-layout-container">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h3>ADZ Admin</h3>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/admin" end>
            <FiGrid />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/admin/clients">
            <FiUsers />
            <span>Clientes</span>
          </NavLink>
          <NavLink to="/admin/projects">
            <FiBriefcase />
            <span>Obras</span>
          </NavLink>
          <NavLink to="/admin/estimates">
            <FiFileText />
            <span>Orçamentos</span>
          </NavLink>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet /> {/* As páginas do sistema (Dashboard, Clientes, etc.) serão renderizadas aqui */}
      </main>
    </div>
  );
};

export default AdminLayout;