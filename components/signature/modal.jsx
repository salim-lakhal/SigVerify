import React from 'react';
import styles from './modal.module.css';

const Modal = ({ show, children, onClose }) => {
  if (!show) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
