import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={classes.navLink}
            to="/"
            //style={({ isActive }) => (isActive ? white : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink}
            to="/standings"
            //style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Standings
          </NavLink>
        </li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default MainHeader;
