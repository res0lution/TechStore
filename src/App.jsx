import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Products } from "./pages/Products";
import { SingleProductPage } from "./pages/SingleProductPage";
import { CartPage } from "./pages/CartPage";
import { Default } from "./pages/Default";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { SideCart } from "./components/SideCart";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="*" component={Default} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
