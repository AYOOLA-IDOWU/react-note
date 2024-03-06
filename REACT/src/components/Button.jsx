import React from 'react'

const Button = ({style, title}) => {
  return (
    // <div className='fs-2 bg-dark text-white w-25 text-center mt-2 mx-auto' >{props.title}</div>
    <div className={style} >{title}</div>

  )
}

export default Button