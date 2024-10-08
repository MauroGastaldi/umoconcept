import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light bg-opacity-75 shadow-sm py-2 rounded-pill sticky-top" style={{ maxWidth: '95%', margin: '10px auto' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={"./img/logo.png"} alt="logoUmo" className="logoUmo" style={{ width: '90px' }} />
                    </Link>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                    <div className="d-flex">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
