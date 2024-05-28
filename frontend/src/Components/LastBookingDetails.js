import React, { useContext, useEffect } from 'react'
import { seats } from '../data'
import BsContext from '../Context/BsContext'

const LastBookingDetails = () => {

  const context=useContext(BsContext)

  const [lastBookingDetails,handleGetBooking]= context

  useEffect(()=>{
    handleGetBooking()
  },[])
  return (
    <div>
      <h2>Last booking details:</h2>
      {
        lastBookingDetails ? (
          <>
          <div>
           <p>Seats:</p>
        <ul>
          {seats.map((seats,index)=>{
            <li>
              (seat):{Number[lastBookingDetails.seats[seats]]}
            </li>
          })}
        </ul>
      </div>
      <p>Slot:<span>{lastBookingDetails.slot}</span></p>
      <p>Movie:<span>{lastBookingDetails.movie}</span></p>
          </>
        ):(
          <p>No previous booking</p>
        )
      }
    </div>
  )
}

export default LastBookingDetails