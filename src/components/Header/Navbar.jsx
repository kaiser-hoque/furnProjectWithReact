import React from 'react'
import Logo from './Logo'
import CardList from './CardList'
import { Link }  from "react-router-dom"

const Navbar = () => {
  return (
    <div className="top-area">
    <div className="header-area">
      <nav
        style={{ backgroundColor: "white" }}
        className="white-bg-navbar navbar navbar-default bootsnav navbar-fixed-top"
        data-minus-value-desktop="70"
        data-minus-value-mobile="55"
        data-speed="1000"
      >
        <div className="top-search">
          <div className="container">
            <div className="input-group">
              <span className="input-group-addon close-search">
                <i className="fa fa-times"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="attr-nav">
           <CardList/>
            {/* <Modal show={isModalOpen} onClose={closeModal} /> */}
          </div>

          <div className="navbar-header fixed-top">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <Logo/>
          </div>

          <div
            className="collapse navbar-collapse menu-ui-design navbar-center ms-auto"
            id="navbar-menu"
          >
            <ul
              className="nav navbar-nav"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="scroll">
                {/* <a href="./home">Home</a> */}
                <Link to="/" className="">Home</Link>
              </li>
              <li className="scroll">
                <Link to="newarrival">New Arrival</Link>
              </li>
              <li className="scroll">
                <Link to="./features">Features</Link>
              </li>
              <li className="scroll">
                <a href="./blog">Blog</a>
              </li>
              <li className="scroll">
                <a href="./contact">Contact</a>
              </li>
              <li className="scroll">
                <a href="./cart">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="clearfix"></div>
  </div>
  )
}

export default Navbar