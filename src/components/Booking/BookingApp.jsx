import './BookingApp.css';
import React, { useState } from 'react';
import Booking from './Booking';
import TimeAvailable from './TimeAvailable';
import ReceiveBooking from './ReceiveBooking';
import Header from '../Header/HeaderAfterLogin';

function BookingApp() {
    return (

        <div style={{backgroundColor:"#ffba42"}}>

            <Header/>
            <TimeAvailable/>
            <Booking/>
            <ReceiveBooking />
            

            <div class="footer">
                <p>Footer</p>
            </div>

         </div>
    );
}

export default BookingApp;
