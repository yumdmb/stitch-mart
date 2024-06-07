import React, {useEffect, useState} from 'react';
import './Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';

function Notification() {
    const [title,setTitle] = useState('All');
    const [noti,setNoti] = useState(null);

    const handleMessageClick = () => {
        console.log("meow")
    }

    const handleAllClick = async() => {
            setTitle('All');
            const res = await fetch("/api/notification/show");
            const json = await res.json();
            setNoti((prev) => json);
            console.log(noti);
    }

    const handleUnreadClick = async()=> {
            setTitle('Unread');
            const res = await fetch("/api/notification/unread");
            const json = await res.json();
            setNoti((prev) => json);
            console.log(noti);
    }

    const handleInventoryClick = async() => {
        setTitle('Low Inventory Alert');
        const res = await fetch("/api/notification/inventory");
        const json = await res.json();
        setNoti((prev) => json);
        console.log(noti);
    }

    const handleOrderClick = async()=> {
        setTitle('Order Update');
        const res = await fetch("/api/notification/order");
        const json = await res.json();
        setNoti((prev) => json);
        console.log(noti);
    }

    const handleAppointmentClick = async()=> {
        setTitle('Appointment');
        const res = await fetch("/api/notification/appointment");
        const json = await res.json();
        setNoti((prev) => json);
        console.log(noti);
    }

    useEffect(() => {
        const fetchNotif = async() =>{
            const res = await fetch("/api/notification/show");
            const json = await res.json();
            setNoti(json);
            console.log(noti);
        };
        fetchNotif();
    },[])

    return (
        <div>
            <HeaderAfterLogin />
            <div className='noti-container'>
            <div className='notification-header'>
                <h1>Notifications</h1>
                <ul className="label-nav">
                    <li>
                        <button onClick={handleAllClick} class="btn btn-warning bi bi-bell-fill">    All</button>
                    </li>
                    <li>
                        <button onClick={handleUnreadClick} class="btn btn-warning bi bi-journal-x">    Unread</button>
                    </li>
                    <li>
                        <button onClick={handleOrderClick} class="btn btn-warning bi bi-cart-dash-fill">    Order Update</button>
                    </li>
                    <li>
                        <button onClick={handleInventoryClick} class="btn btn-warning bi bi-backpack-fill">    Inventory Alert</button>
                    </li>
                    <li>
                        <button onClick={handleAppointmentClick} class="btn btn-warning bi bi-calendar-week">    Appointment</button>
                    </li>
                </ul>
            </div>

            <div className='noti-box'>
                <div className='label-in-box'>
                    <h2><strong>{title}</strong></h2>
                    <p>Mark all as read</p>
                </div>    
                {noti &&
                    noti.map(notif => {
                        return <div onClick={handleMessageClick} key={notif._id} className='messages' style={{backgroundColor : notif.isRead ? '#cbcbcb' : 'white'}}>
                            <h6><strong>{notif.category}</strong></h6>
                            <p>{notif.content}</p>
                        </div>
                })}
                </div>
            </div>
        </div>
    );
}

export default Notification;
