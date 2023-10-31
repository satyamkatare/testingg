import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Navbar.css';
import { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from 'react-router-dom';


export default function Navbar() {

  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleNav, setToogleNav] = useState(true);
  //If small screen detected at first run then do not display any nav headers by default

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if(window.innerWidth<=507)setToogleNav(false);
    else
    setToogleNav(true);
  }, []);

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }


  return (
    // <div className="main">
    <nav
      role="navigation"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px',
        paddingBottom: '100px'
      }}
    >
      <div>
        <img
          class="img"
          src="https://i.ibb.co/DpH0HMd/High-Resolution-02.jpg"
          style={{
            width: '6rem',
            padding: '2%',
            marginLeft: '3vw',
            marginRight: '1vw'
          }}
        />
      {windowWidth <= 507 ?  <div><MenuIcon style={{cursot:"pointer",fontSize:"60px",marginLeft:"6vw"}} onClick={()=>{setToogleNav(!toggleNav)}} /> </div>: null}
      </div>

      <ul>
        <div>
        <li>
          <a class="abcd" href="/home" class="links">
            Home
          </a>
        </li>
        <li>
          <a href="/aboutUs" class="links">
            About Us
          </a>
          <ul>
            <li>
              <a class="temp" href="/aboutUs">
                About anziam
              </a>
            </li>
            <li>
              <a href="/aboutUs">Vision and mission</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="links">
            Products
          </a>
          <ul>
          <li>
              <a href="#">calcium Alginate </a>
            </li>
            <li>
              <a href="#">reinforce calcium Alginate</a>
            </li>

            <li>
              <a href="#">reinforce silver Alginate </a>
            </li>
            <li>
              <a href="#">cmc</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="links">
            Latest
          </a>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/team" class="links">
            Team
          </a>
        </li>
        <li>
          <a href="#" class="links">
            Innovation
          </a>
        </li>
        <li>
          {/* <a href="/contactUs"  class="links abcd"  className="contact"> */}
          <a href="/contactUs"  class="links abcd"  >

          Contact Us
          {/* <NavLink to="contactUs" class="links"  className="contact"></NavLink> */}
          </a>
        </li>
        </div>
      </ul>
    </nav>
    // </div>
  );
}
