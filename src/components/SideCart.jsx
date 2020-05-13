import React from "react";

import { ProductConsumer } from "../context/context";
import styled from "styled-components";

export const SideCart = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>Cart items</p>
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
  position: fixed;
  right: 0;
  top: 60px;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  width: 100%;
  z-index: 1;

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
