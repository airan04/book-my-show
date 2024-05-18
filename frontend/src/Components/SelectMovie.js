import React from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/SelectMovie.css'

const SelectMovie = () => {
  return (
    <>
    <div className='SM_heading'>
       <h1>Movies list</h1>
    </div>
    <div className='SM_container'>
        {moviesList.map((el,index)=>{

           return ( <RadioComponent text={el} key={index} />)
        })}
    </div>
    </>
  )
}

export default SelectMovie