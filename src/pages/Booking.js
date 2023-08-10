import React from 'react'
import Breadcrumb from './Breadcrumb'
import bh from "../image/bh.png"
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import Calendar from 'react-calendar'; 
import Time from './Time.js'
import { Link } from 'react-router-dom'

const Booking = () => {
    const [date, setDate] = useState(new Date())
    const [showTime, setShowTime] = useState(false) 
    
    
  return (

    <>
    <meta title="Booking " />
    <div className='section'>
   <img src={bh} alt='' className='d-block w-100'/>
   </div> 
  <br/> <br/>
   <div className='app bgapp'> <br/>
   <h1 className='header text-center'>Choose a Date and Time</h1>
   <div>
    <Calendar minDate={new Date()} onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
   </div>

   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p className='text-center'>
      
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>
   <div className="d-flex align-items-center justify-content-center w-50 mx-auto mt-5">

        <Link className="d-block btn mx-4 btn-home-henna">Search Artist </Link>
   </div> <br/>

 </div>









    </>
  )
}

export default Booking