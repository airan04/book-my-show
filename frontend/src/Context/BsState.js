import { useState } from "react";
import BsContext from "./BsContext";

const BsState=(props)=>{

    const [movie,changeMovie]= useState('');
    const [noOfSeats,changeNoOfSeats]=useState({
        A1:"",
        A2:"",
        A3:"",
        A4:"",
        D1:"",
        D2:""
    })

    const [time,changeTime]=useState('');
    const [lastBookingDetails,setLastBookingDetails]=useState('');
    return (
      <BsContext.Provider value={{movie,changeMovie,time,changeTime,noOfSeats,changeNoOfSeats,lastBookingDetails}}>{props.children}</BsContext.Provider>
    )
}

export default BsState;
