import React, { Component } from "react";

import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubtotal: 0,
    filteredProducts: [],
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
  };

  componentDidMount() {
    this.setProducts(items);
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    let cartItem = tempCart.find((item) => item.id === id);

    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    let cartItem = tempCart.find((item) => item.id === id);

    cartItem.count = cartItem.count - 1;

    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };

      return product;
    });

    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );

    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStoregeCart(),
        singleProduct: this.getStoregeProduct(),
        loading: false,
      },
      () => this.addTotals()
    );
  };

  getStoregeCart = () => {
    let cart;

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }

    return cart;
  };

  getStoregeProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;

    this.state.cart.forEach((item) => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total,
    };
  };

  addTotals = () => {
    const total = this.getTotals();
    this.setState({
      cartItems: total.cartItems,
      cartSubTotal: total.subTotal,
      cartTax: total.tax,
      cartTotal: total.total,
    });
  };

  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find((item) => item.id === id);

    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    this.setState(
      () => ({
        cart: tempCart,
      }),
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  setSingleProduct = (id) => {
    let product = this.state.storeProducts.find((item) => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false,
    });
  };

  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  openCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          handleSidebar: this.handleSidebar,
          ...this.state,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
