import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <p>Header</p>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/trade">FectchOld</NavLink>
        </li>
        <li>
          <NavLink to="/rq">FetchRQ</NavLink>
        </li>
        <li>
          <NavLink to="/pagination">Pagination</NavLink>
        </li>
        <li>
          <NavLink to="/infinite">InfiniteScroll</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
