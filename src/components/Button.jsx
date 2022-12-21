import React from 'react';

import { useStateContext } from '../context/ContextProvider';

const Button = ({ color, bgColor, borderRadius, text, size, icon, bgHoverColor, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  
  return (
    <button
      type='button'
      onClick={() => setIsClicked(initialState)}
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width} hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button