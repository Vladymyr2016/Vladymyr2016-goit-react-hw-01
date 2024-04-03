import React from 'react';
import s from './Button.module.css';

const Button = ({ onClick, title, children, disabled = false }) => {
  return (
    <button
      className={s.myBtn}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
