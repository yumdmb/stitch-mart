import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {
  let navigate = useNavigate(); // Create a navigate function

  const handleFinancialClick = () => {
    navigate("/financialApp"); // Use navigate to change the route
  };

  const handleNotiClick = () => {
    navigate("/notification"); // Use navigate to change the route
  };

  const handleInventoryClick = () => {
    navigate("/inventory"); // Use navigate to change the route
  };

  const goToHome = () => {
    navigate("/");
  };

  const { currentUser } = useSelector((state) => state.user);

  const isAdmin = currentUser?.isAdmin;

  return (
    <div style={{ backgroundColor: "#0B1E33" }} className="sticky-header">
      <header>
        <div className="px-3 py-2 text-bg-blue">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href=""
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <img
                  src="horizontal-logo-copy.png"
                  alt="Logo"
                  width="180"
                  height="53"
                />
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a
                    href=""
                    className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                    onClick={goToHome}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#FFBA42"
                        className="bi bi-house-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                      </svg>
                    </div>
                    <div>Home</div>
                  </a>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#FFBA42"
                        className="bi bi-flower1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.887 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.064.386 16 16 0 0 0-.213.887 61 61 0 0 0-.676 2.314L10 6.77l-.045-.144a61 61 0 0 0-.676-2.314 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L8 2.34a1 1 0 1 0-1 1.732m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                      </svg>
                    </div>
                    <div>Products</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bookingApp"
                    className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#FFBA42"
                        class="bi bi-bag-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                      </svg>
                    </div>
                    <div>Booking</div>
                  </Link>
                </li>

                {currentUser ? (
                    <li>
                    <button
                      className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                      onClick={handleNotiClick}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#FFBA42"
                          className="bi bi-bell-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                        </svg>
                      </div>
                      <div>Notification</div>
                    </button>
                  </li>
                  ) : (
                    <li>

                    </li>
                  )}

                {isAdmin && (
                  <>
                    <li>
                      <button
                        className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                        onClick={handleInventoryClick}
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#FFBA42"
                            className="bi bi-backpack3-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5 10v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                            <path d="M6 2v.341a6 6 0 0 0-1.308.653l-.416-1.247a1 1 0 0 0-1.749-.284l-.77 1.027a1 1 0 0 0-.149.917l.803 2.407A6 6 0 0 0 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8c0-.771-.146-1.509-.41-2.186l.801-2.407a1 1 0 0 0-.148-.917l-.77-1.027a1 1 0 0 0-1.75.284l-.415 1.247A6 6 0 0 0 10 2.34V2a2 2 0 1 0-4 0m1 0a1 1 0 0 1 2 0v.083a6 6 0 0 0-2 0zm5.941 2.595a6 6 0 0 0-.8-.937l.531-1.595.77 1.027zM3.86 3.658a6 6 0 0 0-.8.937L2.557 3.09l.77-1.027zm.18 3.772a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.142 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.142M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                          </svg>
                        </div>
                        <div>Inventory</div>
                      </button>
                    </li>
                    <li>
                      <button
                        className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                        onClick={handleFinancialClick} // onClick event handler
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#FFBA42"
                            className="bi bi-graph-up"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                            />
                          </svg>
                        </div>
                        <div>Finance</div>
                      </button>
                    </li>
                  </>
                )}

                {/* <li>
                  <button
                    className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                    onClick={handleInventoryClick}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#FFBA42"
                        className="bi bi-backpack3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 10v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                        <path d="M6 2v.341a6 6 0 0 0-1.308.653l-.416-1.247a1 1 0 0 0-1.749-.284l-.77 1.027a1 1 0 0 0-.149.917l.803 2.407A6 6 0 0 0 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8c0-.771-.146-1.509-.41-2.186l.801-2.407a1 1 0 0 0-.148-.917l-.77-1.027a1 1 0 0 0-1.75.284l-.415 1.247A6 6 0 0 0 10 2.34V2a2 2 0 1 0-4 0m1 0a1 1 0 0 1 2 0v.083a6 6 0 0 0-2 0zm5.941 2.595a6 6 0 0 0-.8-.937l.531-1.595.77 1.027zM3.86 3.658a6 6 0 0 0-.8.937L2.557 3.09l.77-1.027zm.18 3.772a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.142 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.142M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </div>
                    <div>Inventory</div>
                  </button>
                </li> */}

                {/* <li>
                  <button
                    className="nav-link d-flex flex-column align-items-center justify-content-center text-white"
                    onClick={handleFinancialClick} // onClick event handler
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#FFBA42"
                        className="bi bi-graph-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                        />
                      </svg>
                    </div>
                    <div>Finance</div>
                  </button>
                </li> */}
              </ul>

              <form
                className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
                role="search"
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div className="text-end ms-lg-4">
                <Link to="/profile" className="profile-link">
                  {currentUser ? (
                    <img
                      src={currentUser.profilePicture}
                      alt="profile"
                      className="profile-picture"
                    />
                  ) : (
                    <button type="button" className="btn btn-outline-warning">
                      Log In
                    </button>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
