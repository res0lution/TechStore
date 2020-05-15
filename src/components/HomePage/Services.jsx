import React, { useState } from "react";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
import styled from "styled-components";

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaDolly />,
      title: "Free shipping",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consectetur?",
    },
    {
      id: 2,
      icon: <FaRedo />,
      title: "30 days return policy",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consectetur?",
    },
    {
      id: 3,
      icon: <FaDollarSign />,
      title: "Secured payment",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consectetur?",
    },
  ];

  return (
    <ServicesWrapper className="py-5">
      <div className="container">
        <div className="row">
          {services.map((item) => (
            <div
              className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
              key={item.id}
            >
              <div className="service-icon">{item.icon}</div>

              <div className="mt-3 text-capitalize">{item.title}</div>

              <div className="mt-3">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);

  .service-icon {
    color: var(--primaryColor) !important;
    font-size: 2.5rem;
  }

  p {
    color: var(--darkGrey);
  }
`;
