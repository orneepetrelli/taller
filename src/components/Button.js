import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    
    &:hover {
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }

    /* Responsive adjustments */
    @media (max-width: 576px) {
        font-size: 1.2rem;
        padding: 0.2rem 0.4rem;
    }

    /* Color adjustments for a pink theme */
    border-color: ${props => props.cart ? "var(--mainYellow)" : "#ff69b4"};
    color: ${props => props.cart ? "var(--mainYellow)" : "#ff69b4"};
    &:hover {
        background: ${props => props.cart ? "var(--mainYellow)" : "#ff69b4"};
        color: ${props => props.cart ? "var(--mainWhite)" : "var(--mainBlue)"};
    }
`;
