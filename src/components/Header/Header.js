import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo-blue.png";
import "./header.css";

import Menu from "../Menu/Menu";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <Menu />
      </header>
    );
  }
}

export default Header;
