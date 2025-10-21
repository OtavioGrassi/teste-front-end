import React, { ReactNode } from 'react';
import '../styles/Modal.scss';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

    return ReactDOM.createPortal(
        <section className="modal-overlay" onClick={onClose}>
            <section className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" aria-label='Botão fechar modal' onClick={onClose}>×</button>
                <section className="modal-content">{children}</section>
            </section>
        </section>,
        document.body
    );
};

export default Modal;