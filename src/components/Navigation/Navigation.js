/** @jsxImportSource @emotion/react */
import { Link, NavLink } from "react-router-dom";
import { navigationStyle } from "./NavigationStyle";

const Navigation = _ => {
  return (
    <nav css={navigationStyle}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/collections">My Collections</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;