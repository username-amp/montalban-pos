import React, { useState } from 'react';
import '../Styles/LoginPin.scss'; // Add your styles here

const LoginPin = ({ onClose }) => {
  const [pin, setPin] = useState('');

  const handleButtonClick = (value) => {
    setPin((prevPin) => prevPin + value);
  };

  const handleClear = () => {
    setPin('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to validate the PIN here
    onClose();
  };

  return (
    <div className="login-pin-overlay">
      <div className="login-pin-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="pin">Enter PIN:</label>
          <input
            type="password"
            id="pin"
            value={'*'.repeat(pin.length)}
            readOnly
            required
          />
          <div className="pin-buttons">
            {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
              <button
                type="button"
                key={number}
                onClick={() => handleButtonClick(number.toString())}
              >
                {number}
              </button>
            ))}
            <button type="button" onClick={() => handleButtonClick('0')}>0</button>
            <button type="button" onClick={handleClear} className="clear-button">Clear</button>
            <button type="submit">Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPin;
