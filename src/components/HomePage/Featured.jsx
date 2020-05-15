import React from "react";
import { Link } from "react-router-dom";

import { Title } from "../Title";
import { ProductConsumer } from "../../context/context";
import { Product } from "../Product";

export const Featured = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Featured products" center />

        <div className="row">
          <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;
              return featuredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <Link to="/products" className="main-link">Our products</Link>
        </div>
      </div>
    </section>
  );
};
