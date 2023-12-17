import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="bar commonNav">
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="positive">
          <h1>PositiveNews</h1>
        </div>
        <div className="kecid">
          <ul
            className="words"
            style={{ display: "flex", textDecoration: "none", gap: "20px" }}
          >
            <li style={{ display: "flex", textDecoration: "none" }}>
              <Link to="/" style={{ color: "black" }}>
                Home |
              </Link>
            </li>
            <li style={{ display: "flex", textDecoration: "none" }}>
              <Link to="/about" style={{ color: "black" }}>
                Sections |
              </Link>
            </li>
            <li style={{ display: "flex", textDecoration: "none" }}>
              <Link to="/about" style={{ color: "black" }}>
                Newsletter |
              </Link>
            </li>
            <li style={{ display: "flex", textDecoration: "none" }}>
              <Link to="/about" style={{ color: "black" }}>
                Magazine |
              </Link>
            </li>
            <li style={{ display: "flex", textDecoration: "none" }}>
              <Link to="/about" style={{ color: "black" }}>
                Christmas gift subscription
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          backgroundColor: " #f1efef",
          height: "50px",
        }}
      >
        <div className="icons">
          <p>.</p>
        </div>
        <div className="search" style={{ display: "flex" }}>
          <p
            style={{
              width: "250px",
              backgroundColor: "#00bcdb",
              color: "white",
              padding: "8px 22px 9px",
            }}
          >
            Support Positive News
          </p>
          <p style={{ padding: "10px" }}>Log In</p>
          <p>shop</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
