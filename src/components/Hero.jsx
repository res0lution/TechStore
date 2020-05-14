import React from "react";

import MainBcg from "../images/mainBcg.jpeg";
import styled from "styled-components";

export const Hero = ({ img, title, max, children }) => {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  align-items: center;
  background: linear-gradient(var(--primaryColorRgba), var(--primaryColorRgba)),
    url(${(props) => props.img}) center/cover no-repeat;
  color: var(--mainWhite);
  display: flex;
  justify-content: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  text-align: center;

  .title {
    font-size: 3.5rem;
    letter-spacing: var(--mainSpacing);
    padding-top: 2rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
  }
`;

Hero.defaultProps = {
  img: MainBcg,
};
