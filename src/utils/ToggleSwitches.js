import React, { useState } from 'react';
import style from './style.module.scss'; 

const ToggleSwitch = ({ options, onToggle }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = (option) => {
    setSelectedOption(option);
    onToggle(option);
  };

  return (
    <div className={style.toggleContainer}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleToggle(option)}
          className={`${style.toggleButton} ${option === selectedOption ? style.selected : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch;