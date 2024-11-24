import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="store" className="navbar-brand-logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    Divina
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Iniciar Sesión
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Registrar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link">
                                    <ButtonContainer>
                                        <span className="mr-2">
                                            <i className="fas fa-cart-plus" />
                                            Carrito
                                        </span>
                                    </ButtonContainer>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: #ffc1e3 !important;
    .nav-link {
        color: #fff !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        transition: all 0.3s ease-in-out;
        
        &:hover {
            color: #ff7f9c !important;
            border-bottom: 2px solid #ff7f9c;
        }
    }
    .navbar-brand-logo {
        width: 50px;
        height: 50px;
    }
    .navbar-nav {
        flex-direction: row;
        align-items: center;
    }
    @media (max-width: 576px) {
        .navbar-nav {
            flex-direction: column;
            align-items: center;
        }
        .nav-item {
            margin: 0.5rem 0;
        }
    }
`;
