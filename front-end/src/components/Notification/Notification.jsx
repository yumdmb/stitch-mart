import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import './Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';

function Notification() {
    const [title,setTitle] = useState('All');
    const [noti,setNoti] = useState(null);
    const [notiCount,setNotiCount] = useState(0);
    const [read, setRead] = useState(false);

    const {currentUser, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        
    },[read]);

    const handleReadAllClick = async() => {
        const res = await fetch(`/api/notification/markRead/${currentUser.email}`, {
            method: 'PUT',
          });
        if(res.ok){
            console.log(`All notification for ${currentUser.username} has been marked as read.`);
        }
        const json = await res.json();
        
        console.log(json);
        setRead(true);
    }

    // const handleMessageClick = async(id) => {
    //     const res = await fetch(`/api/notification/markRead/${id}`, {
    //         method: 'PUT',
    //       });
    //     if(res.ok){
    //         console.log(`Notification with ID ${id} has been marked as read`);
    //     }
    //     const json = await res.json();
        
    //     console.log(json);
    // }

    const handleAllClick = async() => {
            setTitle('All');
            const res = await fetch(`/api/notification/show/${currentUser.email}`);
            const json = await res.json();
            setNoti(json);
            setNotiCount(json.length);
            console.log(noti);
    }

    const handleUnreadClick = async()=> {
            setTitle('Unread');
            const res = await fetch(`/api/notification/unread/${currentUser.email}`);
            const json = await res.json();
            setNoti(json);
            setNotiCount(json.length);
            console.log(noti);
    }

    const handleInventoryClick = async() => {
        setTitle('Low Inventory Alert');
        const res = await fetch(`/api/notification/inventory/${currentUser.email}`);
        const json = await res.json();
        setNoti(json);
        setNotiCount(json.length);
        console.log(noti);
    }

    const handleOrderClick = async()=> {
        setTitle('Order Update');
        const res = await fetch(`/api/notification/order/${currentUser.email}`);
        const json = await res.json();
        setNoti(json);
        setNotiCount(json.length);
        console.log(noti);
    }

    const handleAppointmentClick = async()=> {
        setTitle('Appointment');
        const res = await fetch(`/api/notification/appointment/${currentUser.email}`);
        const json = await res.json();
        setNoti(json);
        setNotiCount(json.length);
        console.log(noti);
    }

    useEffect(() => {
        const fetchNotif = async() =>{
            const res = await fetch(`/api/notification/show/${currentUser.email}`);
            const json = await res.json();
            setNoti(json);
            setNotiCount(json.length);
            console.log(noti);
        };
        fetchNotif();
    },[])

    return (
        <div>
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
                    <h2><strong>{title} - {notiCount}</strong></h2>
                    <button className="btn btn-primary" style={{backgroundColor : '#0B1E33'}} onClick={handleReadAllClick}>Mark all as read</button>
                </div>    
                {noti &&
                    noti.reverse().map(notif => { //.reverse() to apply the latest one on top
                        const formattedTime = new Date(notif.createdAt).toLocaleTimeString({
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true,
                        });

                        const formattedDate = new Date(notif.createdAt).toLocaleDateString();

                        return <div  key={notif._id} className='message' style={{backgroundColor : notif.isRead ? '#f8c94a' : 'white'}}>
                            <h6><strong>{notif.category}</strong></h6>
                            <div className='bottom-in-message'>
                                <h6>{notif.content}</h6>
                                <p>{formattedTime}, {formattedDate}</p>
                            </div>
                        </div>
                })}
                </div>
            </div>
        </div>
    );
}

export default Notification;
//onClick={() => handleMessageClick(notif._id)}
