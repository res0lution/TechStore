import React from "react";
import { ProductConsumer } from "../context/context";

export const HomePage = () => {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          console.log(value);
          return <h2>1</h2>;
        }}
      </ProductConsumer>
    </>
  );
};
