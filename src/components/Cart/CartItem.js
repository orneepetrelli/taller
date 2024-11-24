import React from 'react';
import styled from 'styled-components';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <CartItemWrapper className="row my-8 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Producto: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Precio : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <Button className="btn" onClick={() => decrement(id)}> - </Button>
                    <span className="btn btn-black mx-1">{count}</span>
                    <Button className="btn" onClick={() => increment(id)}> + </Button>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {total} </strong>
            </div>
        </CartItemWrapper>
    );
}

const Button = styled.button`
    background: #ff69b4;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #ff85b3;
        color: #fff;
    }
`;

const CartItemWrapper = styled.div`
    .btn {
        background: #ff69b4;
        border: none;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        padding: 0.2rem 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .btn:hover {
        background: #ff85b3;
        color: #fff;
    }

    .cart-icon {
        cursor: pointer;
        font-size: 1.2rem;
        color: #ff69b4;
    }

    .cart-icon:hover {
        color: #ff85b3;
    }

    @media (max-width: 576px) {
        .col-10 {
            margin-bottom: 1rem;
        }

        .btn {
            font-size: 1rem;
            padding: 0.1rem 0.3rem;
        }
    }
`;
