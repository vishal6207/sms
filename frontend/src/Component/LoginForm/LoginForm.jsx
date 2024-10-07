import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Assuming you are using CSS module for styling
import ApiManager from '../../Api/ApiManager';

function LoginForm({ setUserLoggedIn }) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("admin"); // Set initial selected tab to "admin"
  const [selectedRole, setSelectedRole] = useState(""); // Track the selected role for user

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const password = e.target.pass.value.trim();

    // Determine role based on selected tab
    const role = selectedTab === "admin" ? "admin" : selectedRole;

    if (selectedTab === "user" && !selectedRole) {
      alert("Please select a role");
      return;
    }

    try {
      const userDetail = await ApiManager.loginUser({ username, password, role });
      console.log("=======>", userDetail)
      if (userDetail?.success) {
        const { _id: userId, school } = userDetail?.data || {};
        const { username: userName } = userDetail?.data || {};

        const currentUser = {
          userId,
          schoolId: school?._id,
          userName,
          userRole: role,
        };

        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        // Set the logged-in state and navigate based on role
        setUserLoggedIn(true);
        navigate(`/${role}`);
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          {/* Tab Selection for Admin and User */}
          <div className="tabs-container">
            <button
              className={`tab-button ${selectedTab === "admin" ? "active" : ""}`}
              onClick={() => {
                setSelectedTab("admin");
                setSelectedRole(""); // Clear any user role selection when admin is selected
              }}
            >
              Admin
            </button>
            <button
              className={`tab-button ${selectedTab === "user" ? "active" : ""}`}
              onClick={() => setSelectedTab("user")}
            >
              User
            </button>
          </div>

          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-logo">
              <i className="zmdi zmdi-landscape"></i>
            </span>
            <span className="login100-form-title p-b-34 p-t-27">Log in</span>

            <div className="wrap-input100">
              <input className="input100" type="text" name="username" required />
              <label className="label100">Username</label>
            </div>

            <div className="wrap-input100">
              <input className="input100" type="password" name="pass" required />
              <label className="label100">Password</label>
            </div>

            {/* Conditionally render role selection if the User tab is selected */}
            {selectedTab === "user" && (
              <div className="contact100-form-checkbox role-selection">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="radio"
                  name="role"
                  value="student"
                  onChange={handleRoleChange}
                  required={selectedTab === "user"}
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Student
                </label>

                <input
                  className="input-checkbox100"
                  id="ckb2"
                  type="radio"
                  name="role"
                  value="teacher"
                  onChange={handleRoleChange}
                  required={selectedTab === "user"}
                />
                <label className="label-checkbox100" htmlFor="ckb2">
                  Teacher
                </label>

                <input
                  className="input-checkbox100"
                  id="ckb3"
                  type="radio"
                  name="role"
                  value="parent"
                  onChange={handleRoleChange}
                  required={selectedTab === "user"}
                />
                <label className="label-checkbox100" htmlFor="ckb3">
                  Parent
                </label>
              </div>
            )}

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                Login
              </button>
            </div>

            <div className="text-center p-t-90">
              <a className="txt1" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
