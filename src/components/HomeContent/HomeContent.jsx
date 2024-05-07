import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function HomeContent ()  {

    let navigate = useNavigate();  // Create a navigate function

    const handleLetsGetStartedClick = () => {
        navigate('/signUp');  // Use navigate to change the route
    };

    return (
        <div style={{backgroundColor:"#FFBA42"}}>
            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src="embroidery.webp" className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Experience the art of embroidery<br/>—crafted just for you.</h1>
                <p className="lead">Dedicated to perfection, our artisans pour heart and soul into every piece, ensuring each stitch is a testament to timeless beauty.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-dark rounded-pill btn-lg px-4 me-md-2" onClick={handleLetsGetStartedClick}>Let's get started</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        );
}

export default HomeContent;

