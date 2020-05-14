import React from "react";
import styled from "styled-components";

import { ProductConsumer } from "../context/context";

export const Footer = () => {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    Copyright &copy; Tech store {new Date().getFullYear()}. All
                    rights reserved
                  </p>
                </div>

                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map((item) => (
                    <a key={item.id} href={item.url}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);

  .icon {
    color: var(--mainWhite);
    font-size: 1.5rem;
    transition: var(--mainTransition);
  }

  .icon:hover {
    color: var(--primaryColor);
  }
`;
