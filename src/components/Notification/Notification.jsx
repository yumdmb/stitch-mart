import React from 'react';
import './Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notification() {
    return (

        <div className='noti-container'>
            <div className='notification-header'>
                <h1>Notifications</h1>
                <ul className="label-nav">
                    <li>
                        <p class="bi bi-bell-fill">    All</p>
                    </li>
                    <li>
                        <p class="bi bi-journal-x">    Unread</p>
                    </li>
                    <li>
                        <p class="bi bi-basket-fill">    Order Update</p>
                    </li>
                    <li>
                        <p class="bi bi-calendar-week">    Appointment</p>
                    </li>
                </ul>
            </div>

            <div className='noti-box'>
                <h1>Unread</h1>
                <div className='messages'>
                    <p>Notification 1</p>
                </div>
                <div className='messages'>
                    <p>Notification 2</p>
                </div>
                <div className='messages'>
                    <p>Notification 3</p>
                </div>
            </div>
        </div>
      );
}

export default Notification;
