"use client"
import React, { useState } from 'react'

export default function Header() {
    const [show, setShow]=useState(false)
  return (
    <header>
    {/* Start Navigation */}
    <nav className="navbar secondary mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Start Header Navigation */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand" href="/">
            <img
              src="/logo.jpg"
              className="logo logo-display"
              alt="Logo"
            />
            <img
              src="/logo.jpg"
              className="logo logo-scrolled"
              alt="Logo"
            />
          </a>
        </div>
        {/* End Header Navigation */}
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="collapse-header">
            <img src="/logo-dark.png" alt="Logo" />
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-times" />
            </button>
          </div>
          <ul
            className="nav navbar-nav navbar-center"
            data-in="fadeInDown"
            data-out="fadeOutUp"
          >
            <li className="">
              <a
                href="/"
                className="dropdown-toggle active"
          
              >
                Home
              </a>
         
            </li>
            <li className="">
              <a href="/about" className="dropdown-toggle" data-toggle="dropdown">
                About us
              </a>
    
            </li>
            <li className="">
              <a
                href="/projects"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Projects
              </a>
         
            </li>
            <li className="dropdown on" onClick={()=>show?setShow(false):setShow(true)}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu active " style={{display:show?'block':"none"}}>
                <li>
                  <a href="/web-development">Web Development</a>
                </li>
                <li>
                  <a href="/digital-marketing">Digital Marketing</a>
                </li>
                <li>
                  <a href="/mobile-development">mobile Development</a>
                </li>
                <li>
                  <a href="/graphic-design">Graphic Design</a>
                </li>  
                <li>
                  <a href="software-development">Software Development</a>
                </li>
              </ul>
            </li>
        
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
        <div className="attr-right">
          {/* Start Atribute Navigation */}
          <div className="attr-nav">
            <ul>
              <li className="button light">
                <a href="#">Get Quote</a>
              </li>
            </ul>
          </div>
          {/* End Atribute Navigation */}
        </div>
      </div>
      {/* Overlay screen for menu */}
      <div className="overlay-screen" />
      {/* End Overlay screen for menu */}
    </nav>
    {/* End Navigation */}
  </header>
  )
}
