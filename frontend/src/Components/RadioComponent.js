import React from 'react'
import '../Css/RadioComponent.css'
const RadioComponent = ({text,index}) => {
  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponent