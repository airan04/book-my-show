import React from 'react'
import SelectMovie from '../Components/SelectMovie'
import '../Css/Home.css'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeats from '../Components/SelectSeats'
import LastBookingDetails from '../Components/LastBookingDetails'


const Home = () => {
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
        <button className='BN-btn'>Book now</button>
      </div>
    </div>
  )
}

export default Home