import React, { useContext, useEffect } from 'react'
import { seats } from '../data'
import BsContext from '../Context/BsContext'
import BsState from '../Context/BsState'

const LastBookingDetails = () => {

  const context=useContext(BsContext)

  const {lastBookingDetails,handleGetBooking} = context

  useEffect(()=>{
    handleGetBooking()
  },[])
  // console.log(lastBookingDetails);
  return (
    <div>
      <h2>Last booking details:</h2>
      {
        lastBookingDetails ? (
          <>
          <div>
            <p>Seats:</p>
            <ul>
              {seats.map((seat,index)=>{
              return (
              <li key={index}>
                {seat}:{Number(lastBookingDetails.seats[seat])}
              </li>
              );
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