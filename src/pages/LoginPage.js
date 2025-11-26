
import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
        localStorage.setItem('userInfo', JSON.stringify(data));
        window.location.href = '/admin'; // Redireciona para o dashboard
    } catch (err) {
        setError(err.response?.data?.message || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>ADZ Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;