import React, { useState } from 'react';
import TextField from '@mui/material/TextField'; // Import the TextField component
import '../Styles/LoginModal.scss'; // Import the styles

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic to validate the login credentials here
    if (username.trim() === 'admin' && password === 'password') {
      onLogin();
      onClose();
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-content">
        <form onSubmit={handleLogin}>
          <button onClick={onClose} className="close-button">&times;</button>
          <h2>Login</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
