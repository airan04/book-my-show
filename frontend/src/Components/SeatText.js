import React from 'react'

const SeatText = ({key,text,noOfSeat,changeNoOfSeats}) => {

  const change_seats=(e)=>{
    changeNoOfSeats({...noOfSeat,[e.target.name]:Number(e.target.value)})

    window.localStorage.setItem("seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]:Number(e.target.value)
      })
    )
  }
  return (
    <div>
        <span>{text}</span>
        <input type='number' placeholder='0' max="30" min="0" name={text} onChange={change_seats} value={noOfSeat[text]} ></input>
    </div>
  )
}

export default SeatText