
const FeaturesCard = () => {  
    return (
        <div class="px-5 py-5" id="custom-cards" style={{backgroundColor:"#00537A"}}>
    <h2 class="pb-2 border-bottom text-light">discover the embroidery</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 px-5">
      
      <div class="col">
            <a href="" class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{backgroundImage: "url('/embroidery-service.jpg')",
            backgroundSize: 'cover',      
            backgroundPosition: 'center',
            textDecoration: 'none'
            }}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">embroidery service</h3>
                        <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
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

      <div class="col">
        <a href="" class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{backgroundImage: "url('/start-embroidery.jpg')",
            backgroundSize: 'cover',      
            backgroundPosition: 'center',
            textDecoration: 'none'
            }}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">how to start embroidery</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
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

      <div class="col">
        <a href="" class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{backgroundImage: "url('/reward.png')",
            backgroundSize: 'cover',      
            backgroundPosition: 'center',
            textDecoration: 'none'
            }}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">claim reward and vouchers</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
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