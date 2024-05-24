import React from 'react'
import { seats } from '../data'

const LastBookingDetails = () => {
  return (
    <div>
      <h2>Last booking details:</h2>
      <div>
        <p>Seats:</p>
        <ul>
          {seats.map((seats,index)=>{
            <li>
              (seat):0
            </li>
          })}
        </ul>
      </div>
      <p>Slot:<span>00:00 AM</span></p>
      <p>Movie:<span>Tenet</span></p>
    </div>
  )
}

export default LastBookingDetails