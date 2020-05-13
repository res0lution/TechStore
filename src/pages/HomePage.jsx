import React from "react";
import { ProductConsumer } from "../context/context";

export const HomePage = () => {
  return (
    <>
      <ProductConsumer>{(value) => <h2>{value}</h2>}</ProductConsumer>
    </>
  );
};
