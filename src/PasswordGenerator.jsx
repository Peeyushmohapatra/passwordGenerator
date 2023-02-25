import React from 'react'
import "./PasswordGenerator.css"

const PasswordGenerator = ({handleText , setHandleText,copied,setCopied}) => {
  return (
    <div className='inputContainer'>
      <input className='inputToShow' type="text" value={handleText} onChange={(e) => {
        setHandleText(e.target.value)
      }}/>
      <button className='copyButton' onClick={() => {
        if(handleText.length > 0){
          navigator.clipboard.writeText(handleText);
          setCopied(true)
        }
      }}><i class="fa-solid fa-copy"></i></button>
    </div>
  )
}

export default PasswordGenerator