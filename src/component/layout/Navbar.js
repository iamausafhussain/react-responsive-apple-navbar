import React from "react";
import "./Navbar.css";

const Navbar = () => {
  // Desktop Navigation
  const desktopNav = document.querySelector(".desktop-nav");
  const searchContainer = document.querySelector(".search-container");
  const overlay = document.querySelector(".overlay");

  const addSearch = () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
  };

  const addClose = () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
  };

  const addOverlay = () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
  };

  // Mobile Navigation
  const menuIconContainer = document.querySelector(".menu-icon-container");
  const navContainer = document.querySelector(".nav-container");
  const searchBar = document.querySelector(
    ".mobile-search-container .search-bar"
  );
  const nav = document.querySelector(".nav-container nav");
  const searchInput = document.querySelector(".mobile-search-container input");
  const cancelBtn = document.querySelector(
    ".mobile-search-container .cancel-btn"
  );

  const addMobMenu = () => {
    navContainer.classList.toggle("active");
  };

  const addMobSearch = () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
  };

  const addMobCancel = () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
  };

  return (
    <>
      <div className="nav-container">
        <nav>
          <ul className="mobile-nav">
            <li>
              <div className="menu-icon-container" onClick={() => addMobMenu()}>
                <div className="menu-icon">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="link-logo"></a>
            </li>

            <li>
              <a href="" className="link-bag"></a>
            </li>
          </ul>

          <ul className="desktop-nav">
            <li>
              <a href="#" className="link-logo"></a>
            </li>
            <li>
              <a href="#">Mac</a>
            </li>
            <li>
              <a href="#">iPad</a>
            </li>
            <li>
              <a href="#">iPhone</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a
                href="#"
                className="link-search"
                onClick={() => addSearch()}
              ></a>
            </li>
            <li>
              <a href="#" className="link-bag"></a>
            </li>
          </ul>
        </nav>

        <div className="search-container hide">
          <div className="link-search" onClick={() => addSearch()}></div>
          <div className="search-bar">
            <form action="">
              <input type="text" placeholder="Search apple.com" />
            </form>
          </div>
          <div className="link-close" onClick={() => addClose()}></div>

          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Visiting an Apple Store FAQ</a>
              </li>
              <li>
                <a href="#">Shop Apple Store Online</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">AirTag</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-search-container">
          <div className="link-search" onClick={() => addSearch()}></div>
          <div className="search-bar">
            <form action="">
              <input
                type="text"
                placeholder="Search apple.com"
                onClick={() => addMobSearch()}
              />
            </form>
          </div>
          <span className="cancel-btn" onClick={() => addMobCancel()}>
            Cancel
          </span>

          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Visiting an Apple Store FAQ</a>
              </li>
              <li>
                <a href="#">Shop Apple Store Online</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">AirTag</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overlay" onClick={() => addOverlay()}></div>
    </>
  );
};

export default Navbar;
