import React from "react";

import { Hero } from "../components/Hero";
import { Products } from "../components/ProductsPage/Products";
import productsBcg from "../images/productsBcg.jpeg";

export const ProductsPage = () => {
  return (
    <>
      <Hero img={productsBcg}></Hero>;
      <Products />
    </>
  );
};
