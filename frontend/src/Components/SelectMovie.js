import React, { useContext } from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/SelectMovie.css'
import BsContext from '../Context/BsContext'

const SelectMovie = () => {
  
  const context=useContext(BsContext);
  const {movie,changeMovie}= context;

  const handleChangeMovie=(val)=>{
      changeMovie(val);

      window.localStorage.setItem("movie",val);
  }

  return (
    <>
    <div className='SM_heading'>
       <h1 className='text-4xl font-bold leading-none tracking-tight text-black-500 md:text-5xl lg:text-6xl'>Movies list:</h1>
    </div>
    <div className='SM_container'>
        {moviesList.map((el,index)=>{

           return ( <RadioComponent text={el} key={index} data={movie} changeSelection={handleChangeMovie} />)
        })}
    </div>
    </>
  )
}

export default SelectMovie