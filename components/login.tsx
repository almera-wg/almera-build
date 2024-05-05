'use client'
import React, { useState } from 'react';

function Login() {
  const [isModalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target instanceof HTMLElement && event.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  }

  return (
    <div className="text-center">
      <button onClick={() => setModalOpen(true)} className="relative inline-block h-9 px-6 mt-1 bg-transparent rounded-md font-semibold text-decoration-none text-white cursor-pointer overflow-hidden outline-none border-none transition-colors duration-300 ease-in-out hover:before:scale-105 active:before:scale-95 signup-btn">
        <span>Login</span>
        <div className="absolute top-0 right-0 bottom-0 left-0 border-dashed border-1 border-slate-600 rounded-md z-0 before:transform before:transition-transform before:duration-300"></div>
      </button>

      {isModalOpen && (
        <div className="modal-backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="modal-content relative bg-gray-700 p-8 rounded-lg max-w-sm w-full shadow-md">
            <button onClick={closeModal} className="close-button cursor-pointer">
              
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

