import React from "react";
import "./Navbar.css";
import Logo from "../../images/Logo.svg";
import Avatar from "../../images/girl.png";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <div className="navContent">
            <img src={Logo} alt="logo heal.thy" className="logo" />
            <ul className="navUl">
              <li>
                <a href="/"> timeline</a>
              </li>
              <li>
                <a href="/">profile</a>
              </li>
            </ul>
            <div className="navUser">
              <span className="user">Userlogged</span>
              <img src={Avatar} alt="avatar" className="avatar" />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
