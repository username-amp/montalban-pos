import React from 'react';
import '../Styles/ModalStyles.scss'; // Importing the modal styles

const CashierLogoffSuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <div className="modal-body">
          <h2>Logoff Successful</h2>
          <p>Cashier has been logged off successfully.</p>
        </div>
      </div>
    </div>
  );
};

export default CashierLogoffSuccessModal;
