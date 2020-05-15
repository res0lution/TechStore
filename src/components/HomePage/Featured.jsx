import React from "react";

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
    </section>
  );
};
