import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context/context";

export const SideCart = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item mb-4">
                  <img width="35" src={`../${item.image}`} alt="Cart item" />

                  <div className="mt-3">
                    <h6 className="text-uppercase">{item.title}</h6>
                    <h6 className="text-uppercase text-title">
                      Amount: {item.count}
                    </h6>
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="text-capitalize text-main">
              Cart total: ${cartTotal}
            </h4>

            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                Cart page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const CartWrapper = styled.div`
  background: var(--mainGrey);
  border-left: 4px solid var(--primaryColor);
  height: 100%;
  padding: 2rem;
  position: fixed;
  overflow: scroll;
  right: 0;
  top: 60px;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  width: 100%;
  z-index: 1;

  ul {
    padding: 0 !important;
  }

  .cart-item {
    list-style-type: none;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
