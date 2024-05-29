import React, { useContext } from 'react'
import SelectMovie from '../Components/SelectMovie'
import '../Css/Home.css'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeats from '../Components/SelectSeats'
import LastBookingDetails from '../Components/LastBookingDetails'
import BsContext from '../Context/BsContext'
import Button from '@mui/material/Button';

const Home = () => {

  const context=useContext(BsContext)

  const{
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  }= context


  const handleBookNow=()=>{
      if(!movie){
        setErrorPopup(true)
        setErrorMessage("Please enter movie")
      }else{
        handlePostBooking()
      }
  }

  return (
    <div className='container'>
    <div className='wrapper'>
      <div className='select_movie_component'>
      <SelectMovie />
      </div>
      <div className='last_booking_details_conatiner'>
        <LastBookingDetails/>
      </div>
    </div>
      <div>
        <TimeSchedule />
        <SelectSeats />
        <button className='BN-btn' onClick={handleBookNow}>Book now</button>
      </div>
    </div>
  )
}

export default Home