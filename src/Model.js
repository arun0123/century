// src/components/Modal.js
import React, { useState } from 'react';
import './Model.css'; // Import any custom CSS for styling

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {content}
            </div>
        </div>
    );
}

export default Modal;
