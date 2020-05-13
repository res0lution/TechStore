import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context/context";

export const Sidebar = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    className="sidebar-link"
                    onClick={handleSidebar}
                    to={link.path}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const SideWrapper = styled.nav`
  background: var(--mainGrey);
  border-right: 4px solid var(--primaryColor);
  height: 100%;
  left: 0;
  position: fixed;
  top: 61;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  z-index: 1;

  ul {
    list-style-type: none;
    padding: 0 !important;
  }

  .sidebar-link {
    background: transparent;
    color: var(--mainBlack);
    display: block;
    font-size: 1.5rem;
    padding: 0.5rem 1.5rem;
    text-transform: capitalize;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
