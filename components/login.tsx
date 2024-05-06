'use client'
import React, { useState } from 'react';
import {Input} from "@nextui-org/input";
import {EyeFilledIcon} from "./icons";
import {EyeSlashFilledIcon} from "./icons";


function Login() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


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
        <span>Login</span>
        <div className="absolute top-0 right-0 bottom-0 left-0 border-dashed border-1 border-slate-600 rounded-md z-0 before:transform before:transition-transform before:duration-300"></div>
      </button>

      {isModalOpen && (
        <div className="modal-backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="modal-content relative p-8 bg-white bg-opacity-40 rounded-lg max-w-sm w-full shadow-md">
          <Input
             isClearable
             type="email"
             label="Email"
             variant="bordered"
             placeholder="Enter your email"
             defaultValue="junior@nextui.org"
             onClear={() => console.log("input cleared")}
             className="max-w-xs"
           />
           <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
           <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
             {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
             ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
             }
                type={isVisible ? "text" : "password"}
             className="max-w-xs mt-4"
             />
             <hr className='border-dashed mt-4 mb-4 border-slate-600'></hr>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

