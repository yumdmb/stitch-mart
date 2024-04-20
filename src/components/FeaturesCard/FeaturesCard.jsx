
const FeaturesCard = () => {  
    return (
      <div className="container px-4 py-4" id="custom-cards" style={{backgroundColor:"#00537A"}}>
        <h2 className="pb-2 border-bottom text-light">discover the embroidery</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
          <a href="" className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{backgroundImage: "url('/embroidery-service.jpg')",
            backgroundSize: 'cover',      
            backgroundPosition: 'center',
            textDecoration: 'none'
            }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">embroidery service</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <div style={{
                                  backgroundColor: 'black',  // Sets the background color to dark
                                  borderRadius: '10px',     // Sets the corners of the div to be rounded
                                  padding: '8px',           // Adds some padding around the image
                                  display: 'inline-block'   // Ensures the div does not stretch unnecessarily
                              }}>
                                  <img src="horizontal-logo-copy.png" alt="Logo" width="80" height="24" />
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <div className="col">
          <a href="" className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{backgroundImage: "url('/start-embroidery.jpg')",
            backgroundSize: 'cover',      
            backgroundPosition: 'center',
            textDecoration: 'none'
            }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">how to start embroidery</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                  <div style={{
                                  backgroundColor: 'black',  // Sets the background color to dark
                                  borderRadius: '10px',     // Sets the corners of the div to be rounded
                                  padding: '8px',           // Adds some padding around the image
                                  display: 'inline-block'   // Ensures the div does not stretch unnecessarily
                              }}>
                                  <img src="horizontal-logo-copy.png" alt="Logo" width="80" height="24" />
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <div className="col">
          <a href="" className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{backgroundImage: "url('/reward.png')",
            backgroundSize: 'cover',      
            backgroundPosition: 'center',
            textDecoration: 'none'
            }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">claim reward and vouchers</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                  <div style={{
                                  backgroundColor: 'black',  // Sets the background color to dark
                                  borderRadius: '10px',     // Sets the corners of the div to be rounded
                                  padding: '8px',           // Adds some padding around the image
                                  display: 'inline-block'   // Ensures the div does not stretch unnecessarily
                              }}>
                                  <img src="horizontal-logo-copy.png" alt="Logo" width="80" height="24" />
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}

export default FeaturesCard;