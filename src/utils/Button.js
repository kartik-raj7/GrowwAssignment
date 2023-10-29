import React from 'react';
import style from './style.module.scss';

const Button = ({ type, onClick, heading, subtext,animation,backgroundcolor,color,fontweight }) => {
  return (
    <button onClick={onClick} className={`${style[type]} flex flex-column justify-center align-center ${style[animation]} cursor`} style={{backgroundColor:backgroundcolor,color:color,fontWeight:fontweight}}>
      <div>{heading}</div>
      <div>{subtext}</div>
    </button>
  );
};

export default Button;
