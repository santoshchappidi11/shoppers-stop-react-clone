import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContexts } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { state, Login, Logout } = useContext(AuthContexts);
  const [isShowLoginPopup, setIsShowLoginPopup] = useState(false);
  const [isShowRegisterPopup, setIsShowRegisterPopup] = useState(false);
  const [isShowScreen, setIsShowScreen] = useState(false);
  const [isShowLogoutPopup, setIsShowLogoutPopup] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // const [isAnimation, setIsAnimation] = useState(false);
  const [user, setUser] = useState({});
  const navigateTo = useNavigate();
  const [userRegisterData, setUserRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
  });
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  // console.log(userRegisterData);
  // console.log(userLoginData);

  useEffect(() => {
    if (state?.currentUser?.email) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [state.currentUser]);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (state.currentUser) {
      for (let i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == state.currentUser.email &&
          allUsers[i].password == state.currentUser.password
        ) {
          setUser(allUsers[i]);
        }
      }
    }
  }, [state.currentUser]);

  const showSidePopup = () => {
    setIsShowScreen(true);
    setIsShowLoginPopup(true);
    setIsShowRegisterPopup(false);
  };

  const gotoRegister = () => {
    setIsShowRegisterPopup(true);
    setIsShowLoginPopup(false);
  };

  const gotoLogin = () => {
    setIsShowLoginPopup(true);
    setIsShowRegisterPopup(false);
    // setIsAnimation(true);
  };

  const closePopup = () => {
    setIsShowLoginPopup(false);
    setIsShowRegisterPopup(false);
    setIsShowScreen(false);
  };

  const showLogoutPopup = () => {
    setIsShowLogoutPopup(true);
  };

  const closeLogoutPopup = () => {
    setIsShowLogoutPopup(false);
  };

  const onLogout = () => {
    Logout();
    setIsUserLoggedIn(false);
  };

  const handleRegisterChangeValues = (e) => {
    setUserRegisterData({
      ...userRegisterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChangeValues = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (
      userRegisterData.name &&
      userRegisterData.email &&
      userRegisterData.password &&
      userRegisterData.confirmPassword &&
      userRegisterData.role
    ) {
      if (userRegisterData.password == userRegisterData.confirmPassword) {
        const response = await axios.post("http://localhost:8002/register", {
          userRegisterData,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          setUserRegisterData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "Buyer",
          });
          setIsShowRegisterPopup(false);
          setIsShowLoginPopup(true);
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("Password and ConfirmPassword does not match!");
      }
    } else {
      toast.error("Please fill all the details!");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (userLoginData.email && userLoginData.password) {
      const response = await axios.post("http://localhost:8002/login", {
        userLoginData,
      });

      if (response.data.success) {
        Login(response.data);
        setUserLoginData({ email: "", password: "" });
        toast.success(response.data.message);
        setIsShowRegisterPopup(false);
        setIsShowLoginPopup(false);
        setIsShowScreen(false);
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.error("Please fill all the details");
    }
  };

  return (
    <>
      <div id="navbar">
        <div id="nav-sec-1">
          <div id="sec-1-left">
            <h5>First Citizen Club</h5>
            <h5>All Stores</h5>
            <h5>Help & Support</h5>
          </div>
          <div id="sec-1-middle">
            <div id="logo" onClick={() => navigateTo("/")}>
              <img
                src="https://prodstatic.shoppersstop.com/_ui/updated_path/images/shopperstopimgaes_web/newLogo.svg"
                alt="logo"
              />
            </div>
          </div>
          <div id="sec-1-right">
            <div id="search-bar">
              <input type="text" placeholder="Search Poducts & Brands" />
              <i
                class="fa-solid fa-magnifying-glass fa-xl"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <i
              class="fa-regular fa-heart fa-lg"
              style={{ padding: "0 14px" }}
            ></i>
            <i
              class="fa-solid fa-bag-shopping fa-lg"
              style={{ padding: "0 14px" }}
              onClick={() => navigateTo("/cart")}
            ></i>
            {isUserLoggedIn && (
              <h4
                style={{ height: "20px" }}
                onMouseOver={showLogoutPopup}
                onMouseLeave={closeLogoutPopup}
              >
                Hi {state?.currentUser?.name.toUpperCase()}
              </h4>
            )}

            {!isUserLoggedIn && (
              <i
                onClick={showSidePopup}
                class="fa-regular fa-circle-user fa-lg"
                style={{ padding: "0 14px" }}
              ></i>
            )}
          </div>
        </div>
        <div id="nav-sec-2">
          <div className="sec-2-common">
            <h3>CATEGORIES</h3>
          </div>
          <div className="sec-2-common">
            <h2>LUXE</h2>
          </div>
          <div className="sec-2-common">
            <h3>BARGAINS</h3>
          </div>
          <div className="sec-2-common">
            <h3>STYLE HUB</h3>
          </div>
        </div>
        <div id="nav-sec-3">
          <div
            className="sec-3-common"
            onClick={() => navigateTo("/multiple-products")}
          >
            <h4>MEN</h4>
          </div>
          <div className="sec-3-common">
            <h4>WOMEN</h4>
          </div>
          <div className="sec-3-common">
            <h4>BEAUTY</h4>
          </div>
          <div className="sec-3-common">
            <h4>WATCHES</h4>
          </div>
          <div className="sec-3-common">
            <h4>KIDS</h4>
          </div>
          <div className="sec-3-common">
            <h4>HOMESTOP</h4>
          </div>
          <div className="sec-3-common">
            <h4>GIFTS</h4>
          </div>
          <div className="sec-3-common">
            <h4>BRANDS</h4>
          </div>
        </div>
      </div>
      {/* -------------------------Login-Register-sidebar-popup-----------------------------*/}
      {isShowScreen && (
        <div id="popup-screen">
          {isShowLoginPopup && (
            <div id="login-popup" className="show-side-popup">
              <div className="popup-top">
                <i class="fa-solid fa-xmark fa-2x" onClick={closePopup}></i>
                <div className="popup-header">
                  <h1>Login</h1>
                  <p>for a tailored experience</p>
                </div>
              </div>
              <div className="popup-down">
                <form onSubmit={handleLoginSubmit}>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={userLoginData.email}
                    onChange={handleLoginChangeValues}
                  />
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={userLoginData.password}
                    onChange={handleLoginChangeValues}
                  />
                  <button type="submit">Login</button>
                </form>
                <p>
                  Don't have an account? <b onClick={gotoRegister}>Register</b>
                </p>
              </div>
            </div>
          )}
          {isShowRegisterPopup && (
            <div id="register-popup" className="show-side-popup">
              <div className="popup-top">
                <i class="fa-solid fa-xmark fa-2x" onClick={closePopup}></i>
                <div className="popup-header">
                  <h1>Register</h1>
                  <p>for a tailored experience</p>
                </div>
              </div>
              <div className="popup-down">
                <form onSubmit={handleRegisterSubmit}>
                  <input
                    type="name"
                    placeholder="Enter Your Name"
                    name="name"
                    value={userRegisterData.name}
                    onChange={handleRegisterChangeValues}
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={userRegisterData.email}
                    onChange={handleRegisterChangeValues}
                  />
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={userRegisterData.password}
                    onChange={handleRegisterChangeValues}
                  />
                  <input
                    type="password"
                    placeholder="Enter Confirm Password"
                    name="confirmPassword"
                    value={userRegisterData.confirmPassword}
                    onChange={handleRegisterChangeValues}
                  />
                  <select
                    name="role"
                    onChange={handleRegisterChangeValues}
                    value={userRegisterData.role}
                  >
                    <option>Buyer</option>
                    <option>Seller</option>
                  </select>
                  <button type="submit">Register</button>
                </form>
                <p>
                  Already have an account? <b onClick={gotoLogin}>Login</b>
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {isShowLogoutPopup && (
        <div
          id="side-popup"
          onMouseOver={showLogoutPopup}
          onMouseLeave={closeLogoutPopup}
        >
          <div className="actions" onClick={() => navigateTo("/profile")}>
            <i class="fa-solid fa-user"></i>
            <span>Profile</span>
          </div>
          <div className="actions" onClick={onLogout}>
            <i class="fa-solid fa-gear"></i>
            <span>Logout</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
