import React from 'react'
import "./input.css"

const Input = ({label, onchange}) => {
  return (
    <div className='lengthDiv'>
        <label>{label}</label>
        <input placeholder='Enter Length' className='inputBox' onChange={(e) => {
            onchange(e.target.value)
        }} type="text" />
    </div>
  )
}

export default Input