import React from 'react'

export default function navbar() {
    return (
    // NAVBAR
    <div className="dark-bg" id="home" >
        <nav
            className="navbar navbar-expand-lg  navbar-dark bg-transparent">
            <div className="container">
                <span
                    className="navbar-brand fs-5">Portfolio</span>
                {/* TOGGLE BTN */}
                <button
                    className="navbar-toggler shadow-none border-0"
                    type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation">
                    <span
                        className="navbar-toggler-icon"></span>
                </button>
                {/* SIDEBAR */}
                <div className="sidebar offcanvas offcanvas-start"
                    tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    {/* SIDEBAR HEAD */}
                    <div
                        className="offcanvas-header text-white border-bottom">
                        <h5 className="offcanvas-title"
                            id="offcanvasNavbarLabel">
                            Portfolio
                        </h5>
                        <button type="button"
                            className="btn-close btn-close-white shadow-none border-0"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    {/* SIDEBAR BODY */}
                    <div className="offcanvas-body d-flex">
                        <ul
                            className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                            <li className="nav-item mx-2">
                                <a className="nav-link"
                                    aria-current="page"
                                    href="#home"><span>Home</span></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link"
                                    href="#about"><span>About
                                        Me</span></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link"
                                    href="#projects"><span>Projects</span></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link"
                                    href="#skills"><span>Skills</span></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link"
                                    href="#contact"><span>Contact
                                        Me</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}
