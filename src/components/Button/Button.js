import React from 'react';
import s from './Button.module.css';

const Button = ({ onClick, text }) => {
  return (
    <div className={s.btnContainer}>
      <button className={s.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
