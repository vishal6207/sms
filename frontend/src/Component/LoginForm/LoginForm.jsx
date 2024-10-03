import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import ApiManager from '../../Api/ApiManager';

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [isAdminToggle, setIsAdminToggle] = useState(false); // State for toggle
  const [selectedRole, setSelectedRole] = useState(""); // State for selected role

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.pass.value;
    const role = isAdminToggle ? "admin" : selectedRole; // Set role based on toggle

    // Ensure role is selected if toggle is not admin
    if (!isAdminToggle && !selectedRole) {
      alert("Please select a role");
      return;
    }

    const userDetail = await ApiManager.loginUser({ username, password, role });

    if (role === "admin") {
      onLogin("admin");
      navigate("/admin");
    } else if (username === "s" && password === "2" && role === "Student") {
      onLogin("Student");
      navigate("/Student");
    } else if (username === "p" && password === "1" && role === "Parent") {
      onLogin("Parent");
      navigate("/ParentDashboard");
    } else if (username === "t" && password === "3" && role === "Teacher") {
      onLogin("Teacher");
      navigate("/teacher");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value); // Update selected role
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-logo">
              <i className="zmdi zmdi-landscape">
                {/* <img src={logo} alt="Logo" width={170} /> */}
              </i>
            </span>
            <span className="login100-form-title p-b-34 p-t-27">
              Log in
            </span>

            <div className="wrap-input100">
              <input className="input100" type="text" name="username" required />
              <label className="label100">
                Username
              </label>
            </div>

            <div className="wrap-input100">
              <input className="input100" type="password" name="pass" required />
              <label className="label100">Password</label>
            </div>

            <div className="wrap-input100">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={isAdminToggle}
                  onChange={() => setIsAdminToggle(!isAdminToggle)}
                /> Admin login
              </label>
            </div>

            {/* Conditionally render radio buttons based on toggle state */}
            {!isAdminToggle && (
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="radio"
                  name="role"
                  value="Student"
                  onChange={handleRoleChange}
                  required={!isAdminToggle}
                />
                <label className="label-checkbox100 text-white" htmlFor="ckb1">
                  Student
                </label>

                <input
                  className="input-checkbox100"
                  id="ckb2"
                  type="radio"
                  name="role"
                  value="Teacher"
                  onChange={handleRoleChange}
                  required={!isAdminToggle}
                />
                <label className="label-checkbox100 text-white" htmlFor="ckb2">
                  Teacher
                </label>

                <input
                  className="input-checkbox100"
                  id="ckb3"
                  type="radio"
                  name="role"
                  value="Parent"
                  onChange={handleRoleChange}
                  required={!isAdminToggle}
                />
                <label className="label-checkbox100 text-white" htmlFor="ckb3">
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
