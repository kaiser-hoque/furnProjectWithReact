import { useCart } from "react-use-cart";
// import "./assets/logo/favicon.png";
// import "./assets/css/font-awesome.min.css";
// import "./assets/css/linearicons.css";
// import "./assets/css/animate.css";
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/bootsnav.css";
// import "./assets/css/responsive.css";
import React, { useState } from "react";
import  Navbar  from "./Navbar";
// import Modal from "../Modal/Modal"; // Import the Modal component

// import "./assets/css/style.css";
// import './assets/css/owl.carousel.min.css';
// import './assets/css/owl.theme.default.min.css';

const Header = () => {
  const { totalUniqueItems } = useCart();

  const { cartTotal, items } = useCart();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // // Function to open the modal
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // // Function to close the modal
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div>
      <header id="home" className="welcome-hero">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="active"
            >
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="1">
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="2">
              <span className="small-circle"></span>
            </li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="single-slide-item slide1">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>cloth covered accent chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 399.00
                                <del>$ 499.00</del>
                              </p>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart"
                              onclick="window.location.href='#'"
                            >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button
                              className="btn-cart welcome-add-cart welcome-more-info"
                              onclick="window.location.href='#'"
                            >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img
                              src="assets/images/slider/slider1.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-slide-item slide2">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>mapple wood accent chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 199.00
                                <del>$ 299.00</del>
                              </p>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart"
                              onclick="window.location.href='#'"
                            >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button
                              className="btn-cart welcome-add-cart welcome-more-info"
                              onclick="window.location.href='#'"
                            >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img
                              src="assets/images/slider/slider2.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="single-slide-item slide3">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>valvet accent arm chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 299.00
                                <del>$ 399.00</del>
                              </p>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart"
                              onclick="window.location.href='#'"
                            >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button
                              className="btn-cart welcome-add-cart welcome-more-info"
                              onclick="window.location.href='#'"
                            >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img
                              src="assets/images/slider/slider3.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       <Navbar/>
      </header>
    </div>
  );
};

export default Header;
