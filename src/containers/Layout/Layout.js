import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Hey.</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Layout;
