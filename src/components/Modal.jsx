import React from 'react';
import '../../src/Modal.scss';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <section className="modal-overlay" onClick={onClose}>
            <section className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <section className="modal-content">{children}</section>
            </section>
        </section>,
        document.body
    );
};

export default Modal;