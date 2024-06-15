import React from 'react';
import '../Styles/ModalComponent.scss'; // Add your styles here

const ModalComponent = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
