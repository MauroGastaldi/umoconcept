import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <Link to="/">
                        <img className='logoUmo px-4 w-50' src={"./img/logo.png"} alt="logoUmo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Link>
                    <div className="collapse navbar-collapse mx-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <NavLink className="link-dark" to="/categoria/lamparas">Lamparas</NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="link-dark" to="/categoria/macetas">Macetas</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>

        </header>
    )
}

export default NavBar