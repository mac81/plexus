import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
//import menuIcon from "./menuIcon.svg";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.onOpenMenu = this.onOpenMenu.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }

  onOpenMenu() {
    this.setState({ isOpen: true });
  }

  onCloseMenu() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <div onClick={this.onOpenMenu}>
          <div className="menu-icon__open">
            <span>Meny</span>
            <svg style={{ width: "32px", height: "32px" }} viewBox="0 0 24 24">
              <path
                fill="#009fe2"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
            </svg>
          </div>
        </div>
        <div
          className={`menu-wrapper ${this.state.isOpen &&
            `menu-wrapper--open`}`}
        >
          <button onClick={this.onCloseMenu}>Close</button>
          <nav>
            <ul className="nav-primary">
              <li>
                <NavLink
                  to="/"
                  className="nav-primary__link"
                  activeClassName="nav-primary__link-active"
                  onClick={this.onCloseMenu}
                >
                  Forside
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/trening"
                  className="nav-primary__link"
                  activeClassName="nav-primary__link-active"
                  onClick={this.onCloseMenu}
                >
                  Trening
                </NavLink>
              </li>
              <li>B</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;
