import React from 'react'
import { timings } from '../data'
import '../Css/SelectMovie.css'
import RadioComponent from './RadioComponent'

const TimeSchedule = () => {
    return (
        <>
        <div className='SM_heading'>
           <h1>Time list</h1>
        </div>
        <div className='SM_container'>
            {timings.map((el,index)=>{
    
               return ( <RadioComponent text={el} key={index} />)
            })}
        </div>
        </>
      )
}

export default TimeSchedule