import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar style={{ zIndex: 1 }} className="bg-danger position-fixed w-100">
                <Container className="d-flex justify-content-between align-items-center">
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand style={{ color: 'white' }} className="fs-5 fw-bolder">
                            <i className="fa-solid fa-user fa-xl me-2"></i>
                            <span>Employee App</span>
                        </Navbar.Brand>
                    </Link>
                    <div className="d-flex justify-content-center flex-grow-1">
                        <ul className="list-unstyled d-flex justify-content-center m-0 fw-bold">
                            <li className="px-3">
                                <Link to="/" className="text-white text-decoration-none hover:text-blue">
                                    Home
                                </Link>
                            </li>
                            <li className="px-3">
                                <Link to="/add" className="text-white text-decoration-none hover:text-blue">
                                    Add
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
