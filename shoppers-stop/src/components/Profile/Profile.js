import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { AuthContexts } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { state, login } = useContext(AuthContexts);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [user, setUser] = useState({});
  const navigateTo = useNavigate();
  const [userValues, setUserValues] = useState({ name: "", password: "" });

  const openProfilePopup = () => {
    setShowProfilePopup(true);
  };

  const closeProfilePopup = () => {
    setShowProfilePopup(false);
  };

  const handleChangeValues = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!state.currentUser) {
      alert("Please login to view your profile!");
      navigateTo("/");
    }
  }, [navigateTo, state]);

  useEffect(() => {
    if (state.currentUser) {
      const allUsers = JSON.parse(localStorage.getItem("users"));

      for (let i = 0; i < allUsers.length; i++) {
        if (
          state.currentUser.email == allUsers[i].email &&
          state.currentUser.password == allUsers[i].password
        ) {
          setUserValues(state.currentUser);
          setUser(state.currentUser);
        }
      }
    }
  }, [state.currentUser]);

  const updateProfile = (e) => {
    e.preventDefault();

    if (userValues.name && userValues.password) {
      const allUsers = JSON.parse(localStorage.getItem("users"));
      const currentUser = JSON.parse(localStorage.getItem("current-user"));
      if (currentUser?.email) {
        for (let i = 0; i < allUsers.length; i++) {
          if (
            currentUser.email == allUsers[i].email &&
            currentUser.password == allUsers[i].password
          ) {
            allUsers[i].name = userValues.name;
            allUsers[i].password = userValues.password;
            currentUser.name = userValues.name;
            currentUser.password = userValues.password;
          }
        }
        localStorage.setItem("users", JSON.stringify(allUsers));
        localStorage.setItem("current-user", JSON.stringify(currentUser));
        login(currentUser);
        setUserValues({ name: "", password: "" });
        alert("Your profile has been updated!");
      }
    } else {
      alert("Please fill all the details!");
    }
  };

  return (
    <>
      <div id="profile">
        <div id="main">
          <div id="left">
            <div id="left-1">
              <i class="fa-regular fa-circle-user fa-2x"></i>
              <div id="details">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Mobile: 8356015803</p>
              </div>
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div id="left-2">
              <div id="change-pass">
                <button>Change Password</button>
              </div>
            </div>
            <div id="left-3">
              <div id="options">
                <div>
                  <p>My Offers</p>
                </div>
                <div>
                  <p>My First Citizen Points </p>
                </div>
                <div>
                  <p>My Wallet</p>
                </div>
                <div>
                  <p>My Transaction</p>
                </div>
                <div>
                  <p>My Wardrobe</p>
                </div>
                <div>
                  <p>My Address Book</p>
                </div>
                <div>
                  <p>Logout</p>
                </div>
                <div>
                  <p>Delete Profile</p>
                </div>
              </div>
            </div>
          </div>
          <div id="right">
            <div id="right-header">
              <h2>PERSONAL INFORMATION</h2>
            </div>
            <div id="right-middle">
              <div>
                <h6>First Name</h6>
                <p>{user.name}</p>
              </div>
              <div>
                <h6>Last Name</h6>
                <p>-</p>
              </div>
              <div>
                <h6>Email address</h6>
                <p>{user.email}</p>
              </div>
              <div>
                <h6>Mobile Number (10 digits)</h6>
                <p>8356015803</p>
              </div>
              <div>
                <h6>Gender</h6>
                <p>Male</p>
              </div>
            </div>
            <div id="right-footer">
              <div id="edit">
                <button onClick={openProfilePopup}>EDIT PROFILE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------popup------------------------------------------- */}

      {showProfilePopup && (
        <div id="profile-popup-screen">
          <div id="popup">
            <i class="fa-solid fa-xmark fa-xl" onClick={closeProfilePopup}></i>
            <div id="header">
              <h3>Update Profile</h3>
            </div>
            <div id="middle">
              <form>
                <div>
                  <i class="fa-regular fa-user fa-lg"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Change Name"
                    value={userValues.name}
                    onChange={handleChangeValues}
                  />
                </div>
                <div>
                  <i class="fa-solid fa-lock fa-lg"></i>
                  <input
                    type="text"
                    name="password"
                    placeholder="Change Password"
                    value={userValues.password}
                    onChange={handleChangeValues}
                  />
                </div>
              </form>
            </div>
            <div id="footer">
              <div id="update">
                <button onClick={updateProfile}>Update Profile</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
