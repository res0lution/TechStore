import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "../components/Hero";
import { Services } from "../components/HomePage/Services";
import { Featured } from "../components/HomePage/Featured";

export const HomePage = () => {
  return (
    <>
      <Hero title="Awesome gadgets" max="true">
        <Link className="main-link" style={{ margin: "2rem" }} to="/products">
          Our products
        </Link>
      </Hero>

      <Services />
      <Featured />
    </>
  );
};
