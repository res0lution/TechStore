import React from "react";

import { Hero } from "../components/Hero";
import { Contact } from "../components/ContactPage/Contact";
import contactBcg from "../images/contactBcg.jpeg";

export const ContactPage = () => {
  return (
    <>
      <Hero img={contactBcg} />
      <Contact />
    </>
  );
};
