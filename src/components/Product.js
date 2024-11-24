import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import product1 from './img/product-1.jpg';
import product2 from './img/product-2.jpg';
import product3 from './img/product-3.jpg';
import product4 from './img/product-4.jpg';
import product5 from './img/product-5.jpg';
import product6 from './img/product-6.jpg';
import product7 from './img/product-7.jpg';
import product8 from './img/product-8.jpg';

export default class Product extends Component {
    render() {
        const { id, title, price, inCart } = this.props.product;
        const images = [product1, product2, product3, product4, product5, product6, product7, product8];
        const img = images[id - 1];

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt={`product ${id}`} className="card-img-top" />
                                </Link>
                                <button className="card-btn" disabled={inCart ? true : false} onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                    {inCart ? (
                                        <p className="text-capitalize mb-0" disabled>
                                            {""}
                                            En carrito
                                        </p>
                                    ) : (
                                        <i className="fas fa-cart-plus" />
                                    )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            Precio: <span className="text-pink font-italic">$</span>{price}
                        </p>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
        background: #ffe6f7;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%; /* Ensure consistent card height */
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background: #ffd6e9;
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%; 
        height: 250px; /* Fixed height for the image container */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-img-top {
        width: auto; /* Maintain aspect ratio */
        height: 100%; /* Set height to fill the container */
        object-fit: cover; /* Ensure the image covers the area without distorting */
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.1);
    }
    .card-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: #ff69b4;
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 1s linear;
    }
    .img-container:hover .card-btn {
        transform: translate(0, 0);
    }
    .card-btn:hover {
        color: var(--mainPink);
        cursor: pointer;
    }

    /* Responsive styling */
    @media (max-width: 576px) {
        .col-9, .col-md-6, .col-lg-3 {
            width: 100%;
            padding: 0;
        }
        .card {
            margin-bottom: 15px;
        }
        .card-body {
            padding: 1rem;
        }
    }
    @media (min-width: 577px) {
        .col-md-6 {
            width: 50%;
        }
    }
    @media (min-width: 992px) {
        .col-lg-3 {
            width: 25%;
        }
    }
`;

