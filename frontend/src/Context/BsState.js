import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState=(props)=>{

    const [errorPopup,setErrorPopup]= useState(false)
    const [errorMessage,setErrorMessage]=useState("")

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

    const handlePostBooking=async()=>{
      const response = await fetch('http://localhost:8080/api/booking',{
        method: 'POST',
        headers:{

        },
        body:JSON.stringify({movie:movie,slot:time,seats:noOfSeats}),
      })

      const data= await response.json()
      setErrorPopup(true)
      setErrorMessage(data.message)

      if(response.status=== 200){
        changeTime("")
        changeMovie("")
        setLastBookingDetails(data.data)

        window.localStorage.clear()
      }
    }

    const handleGetBooking=async()=>{

      const response=await fetch('http://localhost:8080/api/booking')
      const data=await response.json();
    
      setLastBookingDetails(data.data)
    }

    useEffect(()=>{
      const movie=window.localStorage.getItem("movie")
      const slot=window.localStorage.getItem("slot")
      const seats=JSON.parse(window.localStorage.getItem("seats"))

      if(movie){
        changeMovie(movie)
      }
      if(slot){
        changeTime(slot)
      }
      if(seats){
        changeNoOfSeats(seats)
      }


    },[])

    return (
      <BsContext.Provider value={{movie,changeMovie,time,changeTime,
      noOfSeats,changeNoOfSeats,lastBookingDetails,setLastBookingDetails,handleGetBooking,handlePostBooking,
      errorMessage,errorPopup,setErrorMessage,setErrorPopup}}>{props.children}</BsContext.Provider>
    )
}

export default BsState;
