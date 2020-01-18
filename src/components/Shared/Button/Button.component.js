import React from 'react';

import './Button.styles.scss';

const Button = ({type, size, children}) => {

  return (
    <button
      className={`btn btn-${size} btn-${type}`}
    >
      {children}
    </button>
  )
}

export default Button;