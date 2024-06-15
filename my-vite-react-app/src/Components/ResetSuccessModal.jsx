import React from 'react';
import '../Styles/ModalStyles.scss'; // Importing the modal styles

const ResetSuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <div className="modal-body">
          <h2>Reset Successful</h2>
          <p>The system has been reset successfully.</p>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessModal;
