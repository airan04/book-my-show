import React from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'

const SelectMovie = () => {
  return (
    <div>
        {moviesList.map((el,index)=>{

           return ( <RadioComponent text={el} key={index} />)
        })}
    </div>
  )
}

export default SelectMovie