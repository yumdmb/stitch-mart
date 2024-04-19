import React from "react";

const Header = () => {  
    return (
        <div>
                  <header>
          <div className="px-3 py-2 text-bg-dark border-bottom">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
                </a>

                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                    <a href="" className="nav-link text-secondary d-flex flex-column align-items-center">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                        </svg>
                      </div>
                      <div>Home</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#speedometer2"></use></svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#table"></use></svg>
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"></use></svg>
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-link d-flex flex-column align-items-center justify-content-center text-white">
                      <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                      </svg>
                      </div>
                      <div>Profile</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-3 py-2 border-bottom mb-3">
            <div className="container d-flex flex-wrap justify-content-center">
              <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
              </form>

              <div className="text-end">
                <button type="button" className="btn btn-light text-dark me-2">Login</button>
                <button type="button" className="btn btn-primary">Sign-up</button>
              </div>
            </div>
          </div>
        </header>
        </div>
    );
}

export default Header;