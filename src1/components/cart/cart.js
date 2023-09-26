import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="border border-3">
          <div className="row">
            <form className="col-md-12" method="post">
              <table className="table">
                <thead>
                  <tr>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Image
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Product Name
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Quantity
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Total
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="images/product-1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <h2 className="h5 text-black">Product 1</h2>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <div
                        className="input-group"
                        style={{ maxWidth: "120px" }}
                      >
                        <span className="input-group-btn">
                          <button
                            className="btn btn-outline-secondary decrease"
                            type="button"
                          >
                            -
                          </button>
                        </span>
                        <input
                          type="text"
                          className="form-control text-center quantity-amount"
                          value="0"
                          placeholder=""
                          aria-label="Quantity"
                          aria-describedby="button-addon1"
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-outline-secondary increase"
                            type="button"
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>$49.00</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-warning text-white remove-product"
                        data-row-index="0"
                      >
                        X
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src="images/product-2.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">Product 2</h2>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <div
                        className="input-group"
                        style={{ maxWidth: "120px" }}
                      >
                        <span className="input-group-btn">
                          <button
                            className="btn btn-outline-secondary decrease"
                            type="button"
                          >
                            -
                          </button>
                        </span>
                        <input
                          type="text"
                          className="form-control text-center quantity-amount"
                          value="0"
                          placeholder=""
                          aria-label="Quantity"
                          aria-describedby="button-addon1"
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-outline-secondary increase"
                            type="button"
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>$49.00</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-warning text-white remove-product"
                        data-row-index="0"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button
                    className="btn btn-warning text-white"
                    style={{ backgroundColor: "#e1ad01", color: "white" }}
                  >
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-warning text-white"
                    style={{ backgroundColor: "#e1ad01", color: "white" }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4 fs-2   " for="coupon">
                    Coupon
                  </label>
                  <p className="fs-4">
                    Enter your coupon code if you have one.
                  </p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0 mt-3">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <button
                    className="btn btn-warning text-white"
                    style={{ backgroundColor: "#e1ad01", color: "white" }}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$230.00</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$230.00</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-black btn-lg py-3 text-white btn-block bg-warning"
                        onclick="window.location='checkout.html'"
                        style={{ backgroundColor: "#e1ad01", color: "white" }}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
