import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SideBar({ menuState, setMenuState }) {
  const nav = useNavigate();
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: 280, height: "100%" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Menu</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              setMenuState(false);
            }}
          >
            <Link
              to="/"
              className={`nav-link ${!menuState ? "active" : "none"}`}
              style={{ color: "white" }}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setMenuState(true);
            }}
          >
            <Link
              to="/createPost"
              className={`nav-link text-white ${
                !menuState ? "none" : "active"
              }`}
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Create Post
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}

export default SideBar;
