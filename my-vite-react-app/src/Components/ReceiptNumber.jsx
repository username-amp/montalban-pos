import React, { useState } from 'react';
import '../Styles/ReceiptNumber.scss'; // Add your styles here

const ReceiptNumber = ({ onClose }) => {
  const [receiptNumber, setReceiptNumber] = useState('');

  const handleButtonClick = (value) => {
    setReceiptNumber((prevNumber) => prevNumber + value);
  };

  const handleClear = () => {
    setReceiptNumber('');
  };

  const handleBackspace = () => {
    setReceiptNumber((prevNumber) => prevNumber.slice(0, -1));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add logic to handle the search here
    console.log('Search Receipt Number:', receiptNumber);
  };

  return (
    <div className="receipt-number-overlay">
      <div className="receipt-number-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <form onSubmit={handleSearch}>
          <label htmlFor="receipt-number">Enter Transaction Number:</label>
          <div className="receipt-number-input">
            {receiptNumber}
          </div>
          <div className="number-buttons">
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
            <button type="button" onClick={handleBackspace} className="backspace-button">⌫</button>
            <button type="button" onClick={handleClear} className="clear-button">Clear (X)</button>
            <button type="submit" className="search-button">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiptNumber;
