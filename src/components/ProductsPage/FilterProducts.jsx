import React from "react";
import styled from "styled-components";

import { ProductConsumer } from "../../context/context";

export const FilterProducts = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts,
        } = value;
        let companies = new Set();
        companies.add("all");

        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }

        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                <div>
                  <label htmlFor="search">Search products</label>

                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>

                <div>
                  <label htmlFor="search">Company</label>

                  <select
                    name="company"
                    id="company"
                    onChange={handleChange}
                    value={company}
                    className="filter-item"
                  >
                    {companies.map((company, index) => (
                      <option key={index} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      Product price: <span>${price}</span>
                    </p>
                  </label>

                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    value={price}
                    handleChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="shipping" className="mx-2">
                    Free shipping
                  </label>

                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    checked={shipping && true}
                    handleChange={handleChange}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

const FilterWrapper = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  label {
    font-weight: bold;
    text-transform: capitalize;
  }

  .filter-item,
  .filter-price {
    background: transparent;
    border: 2px solid var(--darkGrey);
    border-radius: 0.5rem;
    display: block;
    width: 100%;
  }
`;
