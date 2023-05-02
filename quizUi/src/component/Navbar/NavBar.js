import React from "react";
import "./NavBar.css";
import logo1 from "./EnverusLogo.png";
import logo2 from "./navlogo.png";
import { Link } from "react-router-dom";
// import { a } from 'react-router-dom';

let NavBar = () => {
  const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  const studentLoginStatus = localStorage.getItem("studentLoginStatus");
  return (
    <React.Fragment>
      <div className="nav_bar">
        <div className="nav_logo_heading">
          <a className="nav_logo_heading_a" to="/">
            <img className="nav_bar_small_logo" src={logo1} />
          </a>
          <a className="nav_logo_heading_a" to="/">
            <img className="nav_bar_big_logo" src={logo1} />
          </a>

          {/* <a href='#' className='nav_logo_heading_a'>
                        
                    </a> */}

         
        </div>
        {/* <div className="nav_bar_icon_tags">
          <a
            href="#"
            id="nav_bar_icon_tag_a_id_youtube"
            className="nav_bar_icon_tag_a"
          >
            <i
              id="nav_bar_icon_tags_icon_youtube"
              className="fa  fa-youtube fa-lg nav_bar_icon_tag_a_i"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="#"
            id="nav_bar_icon_tag_a_id_twitter"
            className="nav_bar_icon_tag_a"
          >
            <i
              className="fa fa-twitter fa-lg nav_bar_icon_tag_a_i"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="#"
            id="nav_bar_icon_tag_a_id_linkedin"
            className="nav_bar_icon_tag_a"
          >
            <i
              className="fa fa-linkedin fa-lg nav_bar_icon_tag_a_i"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="#"
            id="nav_bar_icon_tag_a_id_instagram"
            className="nav_bar_icon_tag_a"
          >
            <i
              className="fa fa-instagram fa-lg nav_bar_icon_tag_a_i"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="#"
            id="nav_bar_icon_tag_a_id_facebook"
            className="nav_bar_icon_tag_a"
          >
            <i
              className="fa fa-facebook-square fa-lg nav_bar_icon_tag_a_i"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="#"
            id="nav_bar_icon_tag_a_id_telegram"
            className="nav_bar_icon_tag_a"
          >
            <i
              id="nav_bar_icon_tags_icon_bottom"
              className="fa fa-telegram fa-lg nav_bar_icon_tag_a_i"
              aria-hidden="true"
            ></i>
          </a>
        </div> */}
        {teacherLoginStatus == "true" && (
            <>
              <Link className="logout-btn" to="/teacher-logout">
                Logout
              </Link>
            </>
          )}
          {studentLoginStatus == "true" && (
            <>
              <Link className="logout-btn" to="/student-logout">
                Logout
              </Link>
            </>
          )}
      </div>
    </React.Fragment>
  );
};

export default NavBar;
