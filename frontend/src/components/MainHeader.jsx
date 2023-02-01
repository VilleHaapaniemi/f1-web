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
            style={({ isActive }) => ({
              color: isActive ? '#000000' : '#fff',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink}
            to="/standings"
            style={({ isActive }) => ({
              color: isActive ? '#000000' : '#fff',
            })}
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
