import React, { useContext } from "react";
import "./SingleProduct.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContexts } from "../../context/AuthContext";

const SingleProduct = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState();
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const { state } = useContext(AuthContexts);
  // console.log(state?.currentUser?.Email);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      setProducts(result);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products?.length && id) {
      const findProd = products.find((prod) => prod.id == id);
      setSingleProduct(findProd);
    }
  }, [id, products]);

  useEffect(() => {
    console.log(state?.currentUser?.email);
    if (state?.currentUser?.email) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(state.currentUser.email);
    } else {
      setIsUserLoggedIn(false);
      setCurrentUserEmail();
    }
  }, [state.currentUser]);

  const addToCart = () => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (isUserLoggedIn) {
      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == currentUserEmail) {
          allUsers[i].cart?.push(singleProduct);
          localStorage.setItem("users", JSON.stringify(allUsers));
          alert("Product added to your cart!");
          break;
        }
      }
    } else {
      alert("Please Login to add the product!");
    }
  };

  return (
    <>
      <div id="single-product">
        <div id="path">
          <p>
            Home / Multiple-Products / Single-Product / {singleProduct?.title}
          </p>
        </div>
        {singleProduct && (
          <div id="main">
            <div id="left">
              <div id="img-sec-1">
                <div className="img">
                  <img src={singleProduct.image} alt="product" />
                </div>
                <div className="img">
                  <img src={singleProduct.image} alt="product" />
                </div>
              </div>
              <div id="img-sec-2">
                <div className="img">
                  <img src={singleProduct.image} alt="product" />
                </div>
              </div>
            </div>
            <div id="right">
              <h2>{singleProduct.title}</h2>
              <span>{singleProduct.description}</span>
              <div id="price-details">
                <div id="price">
                  <h3> ${singleProduct.price}</h3>
                  <p>$999</p>
                  <span>50% OFF</span>
                </div>
                <h3>Includes all taxes</h3>
              </div>
              <div id="product-view">
                <div id="view">
                  <i class="fa-solid fa-fire fa-xl"></i>
                  <b>312</b>
                </div>
                <h3>People Have Viewed This Product Recently!</h3>
              </div>
              <div id="circle-img">
                <h4>Colors</h4>
                <div id="img">
                  <img src={singleProduct.image} alt="product" />
                </div>
              </div>
              <div id="size-chart">
                <div id="size-header">
                  <h4>Size</h4>
                  <h5>Size Chart</h5>
                </div>
                <div id="size-main">
                  <div>LARGE</div>
                  <div>MEDIUM</div>
                  <div>SMALL</div>
                  <div>X-LARGE</div>
                  <div>XX-LARGE</div>
                  <div>XXX-LARGE</div>
                </div>
              </div>
              <div id="easy-return">
                <p>14 days easy return and exchange applicable for this item</p>
              </div>
              <div id="add-to-cart">
                <div className="side-button">
                  <img
                    src="https://www.tatacliq.com/src/pdp/components/img/new-share-icon.svg"
                    alt="side-button"
                  />
                </div>
                <div className="side-button">
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt="side-button"
                  />
                </div>
                <div className="main-button">
                  {isUserLoggedIn && (
                    <button onClick={addToCart}>ADD TO BAG</button>
                  )}
                  {!isUserLoggedIn && (
                    <button
                      onClick={addToCart}
                      style={{ cursor: "not-allowed" }}
                    >
                      ADD TO BAG
                    </button>
                  )}
                </div>
              </div>
              <div id="delivery-services">
                <div id="delivery-header">
                  <h3>Delivery Services</h3>
                  <i class="fa-solid fa-angle-up fa-xl"></i>
                </div>
                <div id="delivery-pincode">
                  <h4>View available services for your pincode</h4>
                  <div id="pincode">
                    <input type="text" placeholder="Enter Pincode" />
                    <button>Check</button>
                  </div>
                </div>
                <div id="services">
                  <div className="service">
                    <div className="service-icon">
                      <i class="fa-solid fa-truck fa-2x"></i>
                    </div>
                    <div className="service-desc">
                      <h4>Standard Delivery</h4>
                      <p>COD may be available*</p>
                      <p>Free shipping on orders above 1500</p>
                    </div>
                  </div>
                  <div className="service">
                    <div className="service-icon">
                      <i class="fa-solid fa-truck-fast fa-2x"></i>
                    </div>
                    <div className="service-desc">
                      <h4>Express Delivery available</h4>
                      <p>
                        Please enter a pincode to check availability of express
                        delivery at your location
                      </p>
                    </div>
                  </div>
                  <div className="service">
                    <div className="service-icon">
                      <i class="fa-solid fa-store fa-2x"></i>
                    </div>
                    <div className="service-desc">
                      <h4>Express Store Pickup available</h4>
                      <p>
                        Please select size to see availability of this product
                        at your nearest store
                      </p>
                    </div>
                  </div>
                  <div className="service">
                    <div className="service-icon">
                      <i class="fa-solid fa-arrow-rotate-left fa-2x"></i>
                    </div>
                    <div className="service-desc">
                      <h4>
                        14 days easy return and exchange applicable for this
                        item
                      </h4>
                      <p>
                        If you are not completely satisfied with your purchase,
                        you can return most items to us within 14 days of
                        delivery to get a 100% refund. We offer free and easy
                        returns through courier pickup, or you can exchange most
                        items bought online at any of our stores across India.
                        All items to be returned or exchanged must be
                        unused/untampered and in their original condition with
                        original tags and packaging intact (eg. For shoes,
                        please return the shoes in original shoes box
                        packaging).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
