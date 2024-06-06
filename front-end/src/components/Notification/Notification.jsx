import React, {useEffect, useState} from 'react';
import './Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';

function Notification() {
    const [title,setTitle] = useState('All');
    const [noti,setNoti] = useState(null);

    return (
        <div>
            <HeaderAfterLogin />
            <div className='noti-container'>
            <div className='notification-header'>
                <h1>Notifications</h1>
                <ul className="label-nav">
                    <li>
                        <button  class="btn btn-warning bi bi-bell-fill">    All</button>
                    </li>
                    <li>
                        <button class="btn btn-warning bi bi-journal-x">    Unread</button>
                    </li>
                    <li>
                        <button class="btn btn-warning bi bi-cart-dash-fill">    Order Update</button>
                    </li>
                    <li>
                        <button class="btn btn-warning bi bi-backpack-fill">    Inventory Alert</button>
                    </li>
                    <li>
                        <button class="btn btn-warning bi bi-calendar-week">    Appointment</button>
                    </li>
                </ul>
            </div>

            <div className='noti-box'>
                <div className='label-in-box'>
                    <h2><strong>title</strong></h2>
                    <p>Mark all as read</p>
                </div>    
            </div>
        </div>
        </div>
      );
}

export default Notification;
