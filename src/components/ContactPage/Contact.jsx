import React from "react";

import { Title } from "../Title";

export const Contact = () => {
  return (
    <section className="py">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact us" />

          <form action="" className="mt-5">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@email.com"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Theme"
              />
            </div>

            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Your message"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
