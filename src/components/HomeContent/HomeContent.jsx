import React from "react";

const homeContent = () => {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="embroidery.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="700" loading="lazy"/>
                    </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Experience the art of embroidery like never before—crafted just for you.</h1>
                    <p className="lead">Dedicated to perfection, our artisans pour heart and soul into every piece, ensuring each stitch is a testament to timeless beauty.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default homeContent;