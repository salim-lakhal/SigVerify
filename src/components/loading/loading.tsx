import React from 'react';
import styles from './loading.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.pepe}>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
