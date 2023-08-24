import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import banner from "./../../images/banner.jpg";
import { AuthContexts } from "../../context/AuthContext";

const Cart = () => {
  const { state } = useContext(AuthContexts);
  const [cartProducts, setCartProducts] = useState([]);
  const [prodTotalPrice, setProdTotalPrice] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (state.currentUser) {
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];

      for (let i = 0; i < allUsers.length; i++) {
        if (state.currentUser.email == allUsers[i].email) {
          setCartProducts(allUsers[i].cart);
          setIsUserLoggedIn(true);
        }
      }
    } else {
      setCartProducts([]);
      setIsUserLoggedIn(false);
    }
  }, [state.currentUser]);

  useEffect(() => {
    if (cartProducts?.length) {
      // const allUsers = JSON.parse(localStorage.getItem("users")) || [];

      let totalPrice = 0;

      for (let i = 0; i < cartProducts.length; i++) {
        totalPrice = totalPrice + cartProducts[i].price;
      }
      setProdTotalPrice(totalPrice);
    } else {
      setProdTotalPrice(0);
    }
  }, [cartProducts, state.currentUser]);

  const removeProduct = (index) => {
    if (state.currentUser) {
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];

      for (let i = 0; i < allUsers.length; i++) {
        if (state.currentUser.email == allUsers[i].email) {
          allUsers[i].cart.splice(index, 1);
          localStorage.setItem("users", JSON.stringify(allUsers));
          setCartProducts(allUsers[i].cart);
          alert("Product removed!");
          break;
        }
      }
    }
  };

  const removeAllProducts = () => {
    if (state.currentUser) {
      const allUsers = JSON.parse(localStorage.getItem("users"));

      for (let i = 0; i < allUsers.length; i++) {
        if (
          state.currentUser.email == allUsers[i].email &&
          state.currentUser.password == allUsers[i].password
        ) {
          allUsers[i].cart = [];
        }
      }
      localStorage.setItem("users", JSON.stringify(allUsers));
      setCartProducts([]);
      alert("Your Product will deliver soon, Thank You for shopping!");
    }
  };

  return (
    <>
      {isUserLoggedIn && (
        <div id="cart">
          <div id="discount-banner">
            <p>
              10% Instant Discount on Select HDFC Bank Credit Card on minimum
              purchase of Rs.6000. (Maximum Discount of Rs. 800) TnC Apply
            </p>
          </div>
          <div id="cart-main">
            <div id="cart-left">
              <div id="cart-left-1">
                <div id="left-1-header">
                  <h4>Delivery Options available</h4>
                  <div id="pincode">
                    <p>Select your pincode</p>
                    <i class="fa-solid fa-angle-down fa-lg"></i>
                  </div>
                </div>
                <p>Please Select Your Delivery Option</p>
                <div id="delivery-options">
                  <div>
                    <input type="radio" />
                    <span>Standard Delivery</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>Express Delivery</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>Express Store Pickup</span>
                  </div>
                </div>
                <h3>Typically delivers between 3-5 days*</h3>
              </div>
              <div id="cart-left-2">
                <div id="img">
                  <img src={banner} alt="coupon" />
                </div>
              </div>
              <div id="cart-left-3">
                <div id="items">
                  <p>
                    ITEMS{" "}
                    <span> ({cartProducts ? cartProducts?.length : 0})</span>
                  </p>
                </div>
              </div>
              <div id="cart-left-4">
                {cartProducts?.length > 0 ? (
                  cartProducts.map((prod, index) => (
                    <div className="cart-product" key={index}>
                      <div className="prod-header">
                        <div className="prod-img">
                          <img src={prod.image} alt="product" />
                        </div>
                        <div className="prod-desc">
                          <h3>{prod.title}</h3>
                          <p>
                            This is some detail description about the product
                          </p>
                          <h4>
                            Color: <span>Any</span>
                          </h4>
                          <div className="size-qty">
                            <div className="size">
                              <p
                                style={{ fontWeight: "300", fontSize: "15px" }}
                              >
                                Size:
                              </p>
                              <select>
                                <option>Small</option>
                                <option>XL</option>
                              </select>
                            </div>
                            <div className="qty">
                              <p
                                style={{ fontWeight: "300", fontSize: "15px" }}
                              >
                                Qty:
                              </p>
                              <select>
                                <option>1</option>
                                <option>2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="price-details">
                          <div className="price">
                            <h3>${Math.round(prod.price)}</h3>
                            <h4>${Math.round(prod.price / 2)}</h4>
                            <span>50% off</span>
                          </div>
                          <p>
                            Price Dropped by{" "}
                            <b style={{ fontWeight: "500" }}>
                              ${Math.round(prod.price / 2)}
                            </b>
                          </p>
                        </div>
                      </div>
                      <div className="prod-middle">
                        <i
                          class="fa-solid fa-circle-check fa-lg"
                          style={{ color: "rgb(255,107,53)" }}
                        ></i>
                        <h6>
                          1 Offer <span>applied for this product</span>
                        </h6>
                        <i
                          class="fa-solid fa-circle-exclamation fa-rotate-180 fa-lg"
                          style={{ color: "rgb(255,107,53)" }}
                        ></i>
                      </div>
                      <div className="prod-footer">
                        <div>
                          <button
                            onClick={() => removeProduct(index)}
                            style={{ cursor: "pointer" }}
                          >
                            REMOVE
                          </button>
                        </div>
                        <div>
                          <button>MOVE TO WATCHLIST</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1
                    style={{
                      margin: "50px 0",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    No products in the cart!
                  </h1>
                )}
              </div>
            </div>
            <div id="cart-right">
              <div id="cart-right-1">
                <h3>Apply Coupon</h3>
                <div>
                  <input type="text" placeholder="Enter promo/coupon code" />
                  <button>Apply</button>
                </div>
              </div>
              <div id="cart-right-2">
                <input type="checkbox" />
                <h3>Gift wrap</h3>
              </div>
              <div id="cart-right-3">
                <h2>Order Summary</h2>
                <div id="price-summary">
                  <div className="price">
                    <h3>Sub total</h3>
                    <h4>${Math.round(prodTotalPrice)}</h4>
                  </div>
                  <div className="price">
                    <h3>Delivery charges*</h3>
                    <h4>$0</h4>
                  </div>
                  <div className="price">
                    <h3>Offer discount</h3>
                    <h4>${Math.round(prodTotalPrice / 2)}</h4>
                  </div>
                  <div className="price">
                    <h3>Coupon discount</h3>
                    <h4>Apply Coupon</h4>
                  </div>
                </div>
                <div id="total-price">
                  <h2>Total Price</h2>
                  <h2>${Math.round(prodTotalPrice / 2)}</h2>
                </div>
                <div id="total-saving">
                  <h4>Total Savings</h4>
                  <h4>${Math.round(prodTotalPrice / 2)}</h4>
                </div>
              </div>
              <div id="checkout">
                <button onClick={removeAllProducts}>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isUserLoggedIn && (
        <div id="view-cart">
          <h2>Please Login/Register to view your cart : )</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
