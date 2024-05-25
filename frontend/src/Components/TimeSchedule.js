import React, { useContext } from 'react'
import { timings } from '../data'
import '../Css/SelectMovie.css'
import RadioComponent from './RadioComponent'
import BsContext from '../Context/BsContext'

const TimeSchedule = () => {

    const context=useContext(BsContext);
    const {time,changeTime}=context;

    const handleChangeItem=(val)=>{
        changeTime(val);

        window.localStorage.setItem("time",val);
    }
    return (
        <>
        <div className='SM_heading'>
           <h1>Time list</h1>
        </div>
        <div className='SM_container'>
            {timings.map((el,index)=>{
    
               return ( <RadioComponent text={el} key={index} data={time} changeSelection={handleChangeItem} />)
            })}
        </div>
        </>
      )
}

export default TimeSchedule