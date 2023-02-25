import React from 'react'
import "./checkBox.css"

const CheckBox = ({label,onchange}) => {
  return (
    <>
        <div className='checkBoxDiv'>
            <input className='checkBox' type="checkbox" name="checkbox" id="checkbox" onChange={() => {
                onchange()
            }}/>
            <label>{label}</label>
        </div>

    </>
  )
}

export default CheckBox