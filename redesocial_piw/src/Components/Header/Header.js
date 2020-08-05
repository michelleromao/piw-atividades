import React from "react";
import "./Header.css";
import Search from "../Search/Search";
import UserFoto from "../../images/userAna.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Header(props) {
  return (
    <>
      <header>
        <navbar>
          <h2 className="logoname">
            <a href="/">DIVIDINDO</a>
          </h2>
          <Search></Search>
          <ul className="menuBar">
            <li>
              <a href="/"> LINHA DO TEMPO</a>
            </li>
            <li>
              <Link
                activeClass="active"
                to="publish"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="linkToPublish"
              >
                PUBLICAR
              </Link>
            </li>
          </ul>
          <div className="user">
            <img src={UserFoto} alt="" />
            <span className="userName"> Ana</span>
          </div>
        </navbar>
      </header>
    </>
  );
}

export default Header;
