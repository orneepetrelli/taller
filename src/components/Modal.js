import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const { modalOpen, closeModal } = value;
                        const { img, title, price } = value.modalProduct;

                        if (!modalOpen) {
                            return null;
                        } else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                <h5>Producto agregado</h5>
                                                <img src={img} className="img-fluid" alt="product" />
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">Precio : $ {price}</h5>
                                                <Link to='/'>
                                                    <ButtonContainer onClick={() => closeModal()}>
                                                        Tienda
                                                    </ButtonContainer>
                                                </Link>
                                                <Link to='/cart'>
                                                    <ButtonContainer cart onClick={() => closeModal()}>
                                                        Ir al carrito
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            );
                        }
                    }
                }
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999; /* Ensures the modal is on top of other elements */
    #modal {
        background: #ffe6f7;
        border-radius: 0.5rem;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    }
    h5 {
        color: #ff69b4;
    }
    .img-fluid {
        margin-bottom: 1rem;
    }
    @media (max-width: 576px) {
        #modal {
            width: 90%;
        }
    }
`;
