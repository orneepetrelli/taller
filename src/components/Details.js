import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import product1 from './img/product-1.jpg';
import product2 from './img/product-2.jpg';
import product3 from './img/product-3.jpg';
import product4 from './img/product-4.jpg';
import product5 from './img/product-5.jpg';
import product6 from './img/product-6.jpg';
import product7 from './img/product-7.jpg';
import product8 from './img/product-8.jpg';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const { id, company, img, info, price, title, inCart } = value.detailProduct;
                        const images = [product1, product2, product3, product4, product5, product6, product7, product8];
                        const productImage = images[id - 1];

                        return (
                            <ProductWrapper className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-pink my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <div className="img-container">
                                            <img src={productImage} className="card-img-top" alt={`product ${id}`} />
                                        </div>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>Servicio: {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Hecho por: <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-pink">
                                            <strong>
                                                Precio: <span>$</span>{price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Información del producto:
                                        </p>
                                        <p className="text-muted lead">{info}</p>
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>Volver a productos</ButtonContainer>
                                            </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                                {inCart ? "En carrito" : "Añadir al carrito"}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </ProductWrapper>
                        );
                    }
                }
            </ProductConsumer>
        );
    }
}

const ProductWrapper = styled.div`
    .text-pink {
        color: #ff69b4 !important;
    }

    .img-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 300px;
        border-radius: 10px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-img-top {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 1s linear;
    }

    .img-container:hover .card-img-top {
        transform: scale(1.05);
    }

    .text-title {
        font-family: 'Permanent Marker', cursive;
        letter-spacing: 0.1rem;
    }

    p {
        margin: 1rem 0;
    }

    @media (max-width: 576px) {
        .img-container {
            height: 250px;
        }

        .text-title {
            font-size: 1.5rem;
        }
    }
`;
