import React from 'react'

const SeatText = ({key,text}) => {
  return (
    <div>
        <span>{text}</span>
        <input type='number' placeholder='0' max="30" min="0"></input>
    </div>
  )
}

export default SeatText