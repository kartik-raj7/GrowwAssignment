import Image from 'next/image';
import React from 'react';
import style from './nothingtosee.module.scss'

const NothingToSeeHere = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Image className={style.loadingImage} src='https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/groww-logo-light.svg' alt="Loading" width={100} height={40}/>
      <h2>Nothing to See Here</h2>
      <p>Could not find what you are looking for</p>
    </div>
  );
};

export default NothingToSeeHere;
