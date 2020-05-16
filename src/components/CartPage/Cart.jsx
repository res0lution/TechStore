import React from "react";

import { CartColumns } from "./CartColumns";
import { CartList } from "./CartList";
import { CartTotals } from "./CartList";

export const Cart = () => {
  return (
    <div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </div>
  );
};
