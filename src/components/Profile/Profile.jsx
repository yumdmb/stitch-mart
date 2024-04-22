import './Profile.css';
import HeaderAfterLogin from '../Header/HeaderAfterLogin';
import { useNavigate } from 'react-router-dom';


function Profile() {
    
    let navigate = useNavigate();  // Create a navigate function

    const handleSaveChangeClick = () => {
        navigate('/homeAfterLogin');  // Use navigate to change the route
    };
    return (
        <div>
            <HeaderAfterLogin />
            <div className='containers my-5'>
            <div className="card">
                <div className="card-header text-white" style={{ backgroundColor: "#0B1E33" }}>
                    Profile Settings
                </div>
                <div className="tab-content" >
                    <div className="card-body">
                        <div className="d-flex justify-content-center" style={{height: '100%'}}> 
                            <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
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
                                    defaultValue="adamarbain"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Adam Arbain"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">E-mail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="adamarbain@mail.com"
                                />
                                <div className="alert alert-warning mt-3">
                                    Your email is not confirmed. Please check your inbox.
                                    <br />
                                    <a href="" className="alert-link">Resend confirmation</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Passsword</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    defaultValue="Company Ltd."
                                />
                            </div>
                            <div className="d-flex justify-content-end pt-4">
                                <button type="button" className="btn text-light" style={{ backgroundColor: "#0B1E33" }} onClick={handleSaveChangeClick}>Save Changes</button>
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
