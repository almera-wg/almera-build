'use client'
import React, { useState } from 'react';

import {Tabs, Tab} from "@nextui-org/react"; 
import Publish from './form/publish';
import Login from './form/login';

function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const variants: Array<"bordered"> = ["bordered"];
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
      <button onClick={() => setModalOpen(true)} className="relative inline-block h-9 px-6 mt-1 bg-transparent rounded-md font-semibold text-decoration-none text-slade-600 cursor-pointer overflow-hidden outline-none border-none transition-colors duration-300 ease-in-out hover:before:scale-105 active:before:scale-95 signup-btn">
        <span>Publish</span>
        <div className="absolute top-0 right-0 bottom-0 left-0 border-dashed border-1 border-slate-600 rounded-md z-0 before:transform before:transition-transform before:duration-300"></div>
      </button>

      {isModalOpen && (
        <div className="modal-backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="modal-content relative p-8 bg-white bg-opacity-60 rounded-lg max-w-sm w-full shadow-xl">
          <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs key={variant} variant={variant} aria-label="Tabs variants" className='justify-center'>
          <Tab key="Login" title="Login ">
            <Login />
          </Tab>
          <Tab key="Publish" title="Publish">
            <Publish />
          </Tab>
        </Tabs>
      ))}
    </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

