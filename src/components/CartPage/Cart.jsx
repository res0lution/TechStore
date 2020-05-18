import React from "react";

import { CartColumns } from "./CartColumns";
import { CartList } from "./CartList";
import { CartTotals } from "./CartTotals";
import { Title } from "../Title";

export const Cart = ({history}) => {
  return (
    <div className="py-5">
      <div className="container">
        <Title title="Your cart items" center />

        <CartColumns />
        <CartList />
        <CartTotals history={history}/>
      </div>
    </div>
  );
};
