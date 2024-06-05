import './Profile.css';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'


const Profile = () => {
    const {currentUser} = useSelector(state => state.user)

    
    let navigate = useNavigate();  // Create a navigate function

    const handleSaveChangeClick = () => {
        navigate('/homeAfterLogin');  // Use navigate to change the route
    };
    return (
        <div className='background-color'>
            <div className='containers py-5'>
            <div className="card">
                <div className="card-header text-white" style={{ backgroundColor: "#0B1E33" }}>
                    Profile Settings
                </div>
                <div className="tab-content" >
                    <div className="card-body">
                        <div className="d-flex justify-content-center" style={{height: '100%'}}> 
                            <img
                                src={currentUser.profilePicture}
                                alt="Avatar"
                                className="d-block ui-w-40 rounded-circle"
                                style={{width: '10vw', height: '10vw'}}
                            />
                            <div className="media-body d-flex flex-column align-items-center text-center justify-content-center p-4">
                                <label className="btn btn-outline-dark">
                                    Upload new photo
                                    <input type="file" className="account-settings-fileinput" hidden />
                                </label>
                                <button type="button" className="btn btn-light btn-sm md-btn-flat mt-2">Reset</button>
                                <div className="text-muted small mt-2">Allowed JPG, GIF or PNG. Max size of 800K</div>
                            </div>

                        </div>
                        <hr className="border-light m-0" />
                        <div className="card-body pt-3">
                            <div className="form-group">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id='username'
                                    placeholder='Username'
                                    // value={user?.userName}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id='email'
                                    placeholder='Email'
                                    // value={user?.email} 
                                />
                                
                            </div>
                            <div className="form-group">
                                <label className="form-label">Passsword</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id='password'
                                    placeholder='Password'
                                    // value={user?.password} 
                                    readOnly 
                                />
                            </div>
                            {/* <div className="d-flex justify-content-end pt-4">
                                <button type="button" className="btn text-light" style={{ backgroundColor: "#0B1E33" }} onClick={handleSaveChangeClick}>Save Changes</button>
                            </div>   */}    
                            <button className='btn text-light mt-3' style={{ backgroundColor: "#0B1E33" }} >Update</button>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span className='text-danger cursor-pointer'>Delete Account</span>
                                    <span className='text-danger cursor-pointer'>Sign Out</span>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Profile;
