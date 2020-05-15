import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";

import { ProductConsumer } from "../context/context";

export const Product = ({ product }) => {
  return (
    <ProductConsumer>
      {(value) => {
        const { addToCard, setSingleProduct } = value;

        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={product.image}
                  className="card-img-top p-5"
                  alt="Product"
                  style={{ height: "320px" }}
                />
              </div>

              <div className="product-icons">
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => setSingleProduct(product.id)}
                >
                  <FaSearch className="icon" />
                </Link>

                <FaCartPlus
                  className="icon"
                  onClick={() => addToCard(product.id)}
                />
              </div>

              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    height: 100%;
    transition: var(--mainTransition);
  }

  .card:hover {
    box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    opacity: 0.2;
    transform: scale(1.15);
  }

  .img-container {
    position: relative;
  }

  .product-icons {
    left: 50%;
    position: absolute;
    opacity: 0;
    transition: var(--mainTransition);
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .icon {
    background: var(--mainBlack);
    border-radius: 0.5rem;
    color: var(--primaryColor);
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
  }

  .card:hover .product-icons {
    opacity: 1;
  }

  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
