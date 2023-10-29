import React from 'react';
import style from './style.module.scss'; // Create a module for styling
import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className={style.loadingContainer}>
      <Image className={style.loadingImage} src='https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/groww-logo-light.svg' alt="Loading" width={100} height={40}/>
    </div>
  );
};

export default LoadingSpinner;
