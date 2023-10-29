import React from 'react';
import style from './style.module.scss'; // Create a module for styling

const LoadingSpinner = () => {
  return (
    <div className={style.loadingContainer}>
      <img className={style.loadingImage} src='https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/groww-logo-light.svg' alt="Loading" />
    </div>
  );
};

export default LoadingSpinner;
