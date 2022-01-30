import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/AllPlants">View Plants</Link>
        </li>
        <li>
          <Link to="/Logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
