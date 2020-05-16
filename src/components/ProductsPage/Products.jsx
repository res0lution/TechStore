import React from "react";

import { ProductConsumer } from "../../context/context";
import { Title } from "../Title";
import { Product } from "../Product";
import { FilterProducts } from "./FilterProducts";

export const Products = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;

        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our products" center />

              <FilterProducts />

              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Total products: {filteredProducts.length}
                  </h6>
                </div>
              </div>

              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    Sorry, no items matched to your search
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                  ))
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};
