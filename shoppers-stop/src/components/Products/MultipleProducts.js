import React from "react";
import "./MultipleProducts.css";
import banner from "./../../images/banner-multiple-prod.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MultipleProducts = () => {
  const [products, setProducts] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      setProducts(result);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div id="multiple-products">
        <div id="path">
          <p>Home / Men / Clothing / T-Shirts & Polos</p>
        </div>
        <div id="banner">
          <img src={banner} alt="banner" />
        </div>

        <div id="main">
          <div id="left">
            <div className="left-structure">
              <div className="header">
                <h4>BRANDS</h4>
                <i class="fa-solid fa-angle-up"></i>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i
                  class="fa-solid fa-magnifying-glass fa-lg"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="filter-options">
                <div>
                  <input type="checkbox" />
                  <span>ADIDAS (65)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>AEROPOSTALE (2)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>ALCIS (3)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>ALLEN SOLLY (78)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>ALTFILE (4)</span>
                </div>
              </div>
            </div>
            <div className="left-structure">
              <div className="header">
                <h4>OFFERS</h4>
                <i class="fa-solid fa-angle-up"></i>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i
                  class="fa-solid fa-magnifying-glass fa-lg"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="filter-options">
                <div>
                  <input type="checkbox" />
                  <span>FLAT 30% OFF (47)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>FLAT 70% OFF (129)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>FLAT 40% OFF (38)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>FLAT 30% OFF (234)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>FLAT 10% OFF (26)</span>
                </div>
              </div>
            </div>
            <div className="left-structure">
              <div className="header">
                <h4>SIZE</h4>
                <i class="fa-solid fa-angle-up"></i>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i
                  class="fa-solid fa-magnifying-glass fa-lg"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="filter-options">
                <div>
                  <input type="checkbox" />
                  <span>1 (54)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>11-12Y (12)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>13-14Y (3)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>15-16Y (14)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>2 (56)</span>
                </div>
              </div>
            </div>

            <div className="left-structure">
              <div className="header">
                <h4>COLORS</h4>
                <i class="fa-solid fa-angle-up"></i>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i
                  class="fa-solid fa-magnifying-glass fa-lg"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="filter-options">
                <div>
                  <div style={{ backgroundColor: "rgb(241,233,201)" }}></div>
                  <span>BEIGE (40)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "black" }}></div>
                  <span>BLACK (775)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "brown" }}></div>
                  <span>BROWN (160)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "green" }}></div>
                  <span>GREEN (647)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "grey" }}></div>
                  <span>GREY (303)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "orange" }}></div>
                  <span>ORANGE (194)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "pink" }}></div>
                  <span>PINK (245)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "purple" }}></div>
                  <span>PURPLE (154)</span>
                </div>
                <div>
                  <div style={{ backgroundColor: "red" }}></div>
                  <span>RED (94)</span>
                </div>
              </div>
            </div>
            <div className="left-structure">
              <div className="header">
                <h4>DELIVERY TYPE</h4>
                <i class="fa-solid fa-angle-up"></i>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i
                  class="fa-solid fa-magnifying-glass fa-lg"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="filter-options">
                <div>
                  <input type="checkbox" />
                  <span>EXPRESS STORE PICK UP (4,532)</span>
                </div>
              </div>
            </div>
            <div className="left-structure">
              <div className="header">
                <h4>PRICE</h4>
                <i class="fa-solid fa-angle-up"></i>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <i
                  class="fa-solid fa-magnifying-glass fa-lg"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="filter-options">
                <div>
                  <input type="checkbox" />
                  <span>101-500 (1,194)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>501-1000 (1,185)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>1001-2000 (2,088)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>2001-3000 (424)</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>3001-5000 (96)</span>
                </div>
              </div>
            </div>
            {/* ------------------------ */}
            <div id="filter-price">
              <p>Enter a Price range</p>
              <form>
                <div>
                  ₹ <input type="text" />
                </div>
                to
                <div>
                  ₹ <input type="text" />
                </div>
              </form>
              <button>REFINE SEARCH</button>
            </div>
          </div>
          <div id="right">
            <div id="header">
              <div id="header-left">
                <h1>In Store</h1>
                <p> 20 Products</p>
              </div>
              <div id="header-right">
                <span>SORT BY: POPULAR</span>
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div id="header-2">
              <div>
                <h5>SLEEVES</h5>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div>
                <h5>NECKLINE</h5>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div>
                <h5>OCCASION</h5>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <p>Show More</p>
            </div>

            <div id="all-products">
              {products &&
                products.map((prod, index) => (
                  <div
                    className="product"
                    key={index}
                    onClick={() => navigateTo(`/single-product/${prod.id}`)}
                  >
                    <div className="img">
                      <img src={prod.image} alt="product-img" />
                      <div className="rating-count">
                        <div className="rating">
                          <i
                            style={{ color: "rgb(248,196,65)" }}
                            class="fa-solid fa-star fa-sm"
                          ></i>
                          <span>{prod.rating.rate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <h2>{prod.title}</h2>
                      <div className="price">
                        <h3>${prod.price}</h3>
                        <h4>$50</h4>
                        <span>58% off</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleProducts;
