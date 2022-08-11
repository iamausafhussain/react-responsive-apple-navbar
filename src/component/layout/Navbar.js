import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  // Desktop Navigation
  const desktopNavElement = useRef(null);
  const searchContainerElement = useRef(null);
  const overlayElement = useRef(null);

  const addSearch = () => {
    desktopNavElement.current.classList.add("hide");
    searchContainerElement.current.classList.remove("hide");
    overlayElement.current.classList.add("show");
  };

  const addClose = () => {
    desktopNavElement.current.classList.remove("hide");
    searchContainerElement.current.classList.add("hide");
    overlayElement.current.classList.remove("show");
  };

  const addOverlay = () => {
    desktopNavElement.current.classList.remove("hide");
    searchContainerElement.current.classList.add("hide");
    overlayElement.current.classList.remove("show");
  };

  // Mobile Navigation

  const navContainerElement = useRef(null);
  const searchBarElement = useRef(null);
  const navElement = useRef(null);

  const addMobMenu = () => {
    navContainerElement.current.classList.toggle("active");
  };

  const addMobSearch = () => {
    searchBarElement.current.classList.add("active");
    navElement.current.classList.add("move-up");
    desktopNavElement.current.classList.add("move-down");
  };

  const addMobCancel = () => {
    searchBarElement.current.classList.remove("active");
    navElement.current.classList.remove("move-up");
    desktopNavElement.current.classList.remove("move-down");
  };

  return (
    <>
      <div className="nav-container" ref={navContainerElement}>
        <nav ref={navElement}>
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

          <ul className="desktop-nav" ref={desktopNavElement}>
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

        <div className="search-container hide" ref={searchContainerElement}>
          <div className="link-search" onClick={() => addSearch()}></div>
          <div className="search-bar" ref={searchBarElement}>
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

        <div className="mobile-search-container" ref={searchBarElement}>
          <div className="link-search" onClick={() => addSearch()}></div>
          <div className="search-bar" ref={searchBarElement}>
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

      <div
        className="overlay"
        ref={overlayElement}
        onClick={() => addOverlay()}
      ></div>
    </>
  );
};

export default Navbar;
