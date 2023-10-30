import React from 'react';
import style from '../style.module.scss';
import {BiSolidUpArrow} from 'react-icons/bi'
const Slider = ({ currentPrice, low, high }) => {
    const positionPercent = ((currentPrice - low) / (high - low)) * 100;

  return (
    <div className={style.slidercontainer}>
 <div className={style.line} >
       <div style={{ left: `${positionPercent}%` ,position:'absolute'}} className='flex flex-column'>
       <BiSolidUpArrow style={{color:'#5367FF'}}/>
        <span className={style.label}>{`${currentPrice}$`}</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
