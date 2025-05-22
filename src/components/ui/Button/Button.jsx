import React from 'react'
import styles from './Button.module.css'


function Button({className, text, icon, onClick}) {
    return (
      <button
        className={`bg-[#393E46]  rounded px-3 py-2 mx-2 hover:bg-[#948979] hover:shadow-lg hover:shadow-[#393E46] hover:cursor-pointer transition-all duration-300 ease-in-out ${className}`}
        onClick={onClick}
      >
        {icon && <i className={icon}></i>}
        {text}
      </button>
    );
    return <>
    
    </>
}

export default Button
