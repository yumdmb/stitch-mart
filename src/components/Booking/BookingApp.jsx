import './BookingApp.css';
import React, { useState } from 'react';
import Booking from './Booking';
import TimeAvailable from './TimeAvailable';
import ReceiveBooking from './ReceiveBooking';
import Header from '../Header/HeaderAfterLogin';
import Footer from '../Footer/Footer';


function BookingApp() {

    return (

        <div style={{backgroundColor:"#ffba42"}}>

            <Header/>
                <div className='book-header'>
                    <h1>Booking</h1>
                    
                </div>

            <TimeAvailable/>
            <Booking/>
            <ReceiveBooking />
            
            

            <div class="footer">
            <Footer/>
            </div>

         </div>
    );
}

export default BookingApp;
