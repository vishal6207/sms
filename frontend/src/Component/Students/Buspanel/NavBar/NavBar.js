import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Navbar from "../../Navbar/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar />
      <nav className="navbar">
        <h1>School Bus Routing Management System</h1>
        <ul>
          <li>
            <Link to="/homebus">HomeBus</Link>
          </li>
          <li>
            <Link to="/buses">Buses</Link>
          </li>
          <li>
            <Link to="/routes">Routes</Link>
          </li>
          <li>
            <Link to="/drivers">Drivers</Link>
          </li>
          <li>
            <Link to="/schedules">Schedules</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
