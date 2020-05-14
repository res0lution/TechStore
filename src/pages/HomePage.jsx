import React from "react";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context/context";
import { Hero } from "../components/Hero";

export const HomePage = () => {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          return (
            <Hero title="Awesome gadgets" max={true}>
              <Link to="/products">Our products</Link>
            </Hero>
          );
        }}
      </ProductConsumer>
    </>
  );
};
