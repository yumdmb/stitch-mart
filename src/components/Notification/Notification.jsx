import React from 'react';
import './Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';

function Notification() {

    return (
        <div>
            <HeaderAfterLogin />
            <div className='noti-container'>
            <div className='notification-header'>
                <h1>Notifications</h1>
                <ul className="label-nav">
                    <li>
                        <button class="btn btn-warning bi bi-bell-fill">    All</button>
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
                    <h2><strong>Unread</strong></h2>
                    <p>Mark all as read</p>
                </div>
                
                <div className='messages'>
                    <h6 className='bi bi-cart-dash'>     |<strong>                          Order Updates</strong></h6>
                    <p>Your order is ready to ship!</p>
                </div>
                <div className='messages'>
                    <h6 className='bi bi-calendar'>     |<strong>                          Appointment Updates</strong></h6>
                    <p><strong>1 day left</strong> before your appointment with us. Can't wait to meet you!</p>
                </div>
                <div className='messages'>
                    <h6 className='bi bi-backpack'>     |<strong>                          Low Inventory Alert</strong></h6>
                    <p>Your inventory <strong>item #69420</strong> is running low!</p>
                </div>
            </div>
        </div>
        </div>
      );
}

export default Notification;
