import React from "react";

import { CartItem } from "./CartItem";
import { ProductConsumer } from "../../context/context";

export const CartList = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {(value) => {
              const { increment, decrement, cart, removeItem } = value;

              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    Your cart is currently empty
                  </h1>
                );
              }

              return (
                <>
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      increment={increment}
                      decrement={decrement}
                      cartItem={item}
                      removeItem={removeItem}
                    />
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
};
