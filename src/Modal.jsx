import React from 'react';
import { useGlobalContext } from './context.jsx';

const Modal = () => {
  const { isModalOpen, closeModal, modalRef } = useGlobalContext();

  return (
    <div className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}>
      <div className="modal-container" ref={modalRef}>
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>✖</button>
      </div>
    </div>
  );
};

export default Modal;
