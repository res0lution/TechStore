import React from "react";

import { Title } from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="About company"
              style={{ background: "var(--mainGrey)" }}
            />
          </div>

          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About us" />

            <p className="text-lead text-muted mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nemo temporibus id sit laudantium veritatis libero nihil, soluta
              odit, aliquam minus alias amet facere rerum dolores porro iste,
              adipisci corporis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tempore nemo temporibus id sit laudantium
              veritatis libero nihil, soluta odit, aliquam minus alias amet
              facere rerum dolores porro iste, adipisci corporis!
            </p>

            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
