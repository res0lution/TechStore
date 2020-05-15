import React from "react";

import { ProductConsumer } from "../../context/context";
import { Title } from "../Title";
import { Product } from "../Product";

export const Products = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;

        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our products" center />

              <div className="row py-5">
                {filteredProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};
