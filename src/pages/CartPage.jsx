import React from "react";

import { Cart } from "../components/CartPage/Cart";
import { Hero } from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";

export const CartPage = ({history}) => {
  return (
    <>
      <Hero img={storeBcg} />
      <Cart history={history}/>
    </>
  );
};
