import React from 'react'
import { useCart } from "react-use-cart";

const CardList = () => {
    const { totalUniqueItems ,cartTotal, items } = useCart();

  return (
    <ul>
              <li>
                <a href="./signin">Login🔐</a>
                {/* <a href="#" onClick={openModal}>
        Login🔐
      </a> */}
              </li>
              <li>
                <a href="./register">Register</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span className="lnr lnr-cart">🛒</span>
                  <span className="badge badge-bg-1">
                    {totalUniqueItems}
                  </span>
                </a>
                <ul className="dropdown-menu cart-list s-cate">
                  {/* Your cart items here */}

                  <li class="single-cart-list">
                    <a href="#" className="photo">
                      <img
                        src="assets/images/collection/arrivals1.png"
                        className="cart-thumb"
                        alt="image"
                      />
                    </a>
                    <div className="cart-list-txt">
                      <h6>
                        <a href="#">
                          arm <br /> chair
                        </a>
                      </h6>
                      <p>
                        1 x - <span className="price">$180.00</span>
                      </p>
                    </div>
                    <div className="cart-close">
                      <span className="lnr lnr-cross"></span>
                    </div>
                  </li>

                  <li className="total">
                    <span>Total: ${cartTotal.toFixed(2)}</span>
                    <button
                      className="btn-cart pull-right"
                      onClick={() => (window.location.href = "./cart")}
                    >
                      View Cart
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
  )
}

export default CardList