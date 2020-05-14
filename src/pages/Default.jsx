import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";

export const Default = () => {
  return (
    <Hero img={defaultBcg} title="404" max="true">
      <h2 className="text-uppercase">Page not found</h2>
      <Link to="/" style={{ margin: "2rem" }} className="main-link">
        Return home
      </Link>
    </Hero>
  );
};
