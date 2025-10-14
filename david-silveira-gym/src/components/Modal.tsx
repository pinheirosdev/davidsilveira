import React from 'react';
import '../styles/Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            
            <div className="modal-container" onClick={handleContentClick}>
                
                <button className="modal-close-button" onClick={onClose} aria-label="Fechar">
                    &times; 
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;