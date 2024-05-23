import React from 'react'
import SeatText from './SeatText'
import { seats } from '../data'

const SelectSeats = () => {
  return (
    <div>
      <h1>Select seats:</h1>
      <div>
        {seats.map((el,index)=>{
          return (
          <SeatText key={index} text={el} />
        )})}
      </div>
    </div>
  )
}

export default SelectSeats