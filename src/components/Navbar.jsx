import React from "react";
import styled from "styled-components";
import { FaBars, FaCartPlus } from "react-icons/fa";

import { ProductConsumer } from "../context/context";
import logo from "../images/logo.svg";

export const Navbar = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleSidebar, handleCart } = value;

        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="Logo" />

              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const NavWrapper = styled.nav`
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  padding: 1rem 1.5rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;

  .nav-center {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-icon {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    background: var(--primaryColor);
    border-radius: 50%;
    color: var(--mainWhite);
    font-size: 0.85rem;
    padding: 0 5px;
    position: absolute;
    top: -8px;
    right: -8px;
  }
`;
