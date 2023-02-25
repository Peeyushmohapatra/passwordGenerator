import React from 'react'
import "./generatePassword.css"

const GeneratePassword = ({onclick}) => {
  return (
    <div className='lastDiv'>
        <button className='generateButton' onClick={() => {
            onclick()
        }}>Generate Password</button>
    </div>
  )
}

export default GeneratePassword