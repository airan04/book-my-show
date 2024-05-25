import React, { useContext } from 'react'
import SeatText from './SeatText'
import { seats } from '../data'
import BsContext from '../Context/BsContext'

const SelectSeats = () => {
  const context=useContext(BsContext)

  const {noOfSeats,changeNoOfSeats}=context
  

  return (
    <div>
      <h1>Select seats:</h1>
      <div>
        {seats.map((el,index)=>{
          return (
          <SeatText key={index} text={el} noOfSeat={noOfSeats} changeNoOfSeats={changeNoOfSeats} />
        )})}
      </div>
    </div>
  )
}

export default SelectSeats