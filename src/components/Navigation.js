import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 10px;
  color: #ebebeb;
`;

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Live Stream</NavLink>
      <NavLink to="/recordings">Records</NavLink>
    </nav>
  );
}

export default Navigation;
