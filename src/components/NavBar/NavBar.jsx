import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import "../NavBar/NavBar.css";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar-container navbar navbar-expand-lg" >
                <div className="navbar-content container-fluid d-flex justify-content-between align-items-center">
                    
                    {/* Logo */}
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={"./img/logo.png"} alt="logoUmo" className="logoUmo" style={{ width: '90px' }} />
                    </Link>

                    {/* Botón menú hamburguesa para mobile */}
                    <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Enlaces */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item px-3">
                                <NavLink className="nav-link text-dark fw-bold" to="/categoria/lamparas" activeclassname="active" style={{ transition: 'color 0.3s ease' }}>
                                    Lámparas
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link text-dark fw-bold" to="/categoria/macetas" activeclassname="active" style={{ transition: 'color 0.3s ease' }}>
                                    Macetas
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Carrito */}
                    <div className="d-flex mx-auto">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
