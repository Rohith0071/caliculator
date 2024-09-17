import React from 'react'



const Button = (props) => {
  return (
    <>
      <button className='btn btn-outline-dark w-25'onClick={props.onClick} value={props.value}>{props.value}</button>
    </>
  )
}

export default Button
