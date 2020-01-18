import React from 'react';

import './Button.styles.scss';

const Button = ({type, size, onClick, children}) => {

  return (
    <button
      className={`btn btn-${size} btn-${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;