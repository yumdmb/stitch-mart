
const FeaturesCard = () => {  
    return (
        <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Custom cards</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      
      <div class="col">
            <a href="" class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                        <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            <img src="horizontal-logo-copy.png" alt="Logo" width="80" height="24" />
                        </li>
                        <li class="d-flex align-items-center me-3">
                            <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                            <small>Earth</small>
                        </li>
                        <li class="d-flex align-items-center">
                            <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                            <small>3d</small>
                        </li>
                        </ul>
                </div>
            </a>
        </div>

      <div class="col">
        <a href="" class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="horizontal-logo-copy.png" alt="Logo" width="80" height="24" />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </a>
      </div>

      <div class="col">
        <a href="" class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="horizontal-logo-copy.png" alt="Logo" width="80" height="24" />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>5d</small>
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