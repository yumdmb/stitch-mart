import React from "react";

const HomeContent = () => {
    return (
        <div class="container col-xxl-8 px-4 py-5" style={{backgroundColor: "#FFBA42"}}>
            <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
            <div class="col-10 col-sm-10 col-lg-6">
                <img src="embroidery.webp" class="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Experience the art of embroidery crafted just for you.</h1>
                <p class="lead">Dedicated to perfection, our artisans pour heart and soul into every piece, ensuring each stitch is a testament to timeless beauty.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-dark rounded-pill btn-lg px-4 me-md-2">Let's get started</button>
                </div>
            </div>
            </div>
        </div>
        );
}

export default HomeContent;

