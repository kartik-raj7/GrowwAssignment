import React from 'react'
import style from './style.module.scss'
import convertToUpperCase from '../UpperCase'
import { useRouter } from 'next/router';
const Card = ({data,url}) => {
const router = useRouter();
const handleCardClick = () => {
    router.push(url);
  };
  return (
    <div className={`${style.card} glass-effect flex flex-column justify-center align-center cursor`} onClick={handleCardClick}>      
        {Object.keys(data).map((key) => (
            <div className='flex align-center w-80 justify-between' key={key}>
            <div className='m-0 fontheading'>{convertToUpperCase(key)} </div> 
  <label key={key} className='fontsubheading'>{data[key]} </label>
    </div>
))}
    </div>
  )
}

export default Card