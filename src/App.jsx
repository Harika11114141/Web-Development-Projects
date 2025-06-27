import React from 'react';
import { useGlobalContext } from './context';
import Sidebar from './Sidebar';
import Modal from './Modal';

function App() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main className="main-container">
      <button className="btn toggle-btn" onClick={openSidebar}>☰</button>

      <div className="modal-button-wrapper">
        <button className="btn modal-btn" onClick={openModal}>Show Modal</button>
      </div>

      <Sidebar />
      <Modal />
    </main>
  );
}

export default App;
