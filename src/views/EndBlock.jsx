import React from "react";
import { Container } from "reactstrap";

const Subscribe = () => {
  return (
    <section className="section stay-tunned">
      <Container className="bring-to-front">
        <div className="shadow rounded p-5 bg-contrast overflow-hidden">
          <div className="section-heading text-center">
            <h2 className="heading-line">Pysykää kuulolla</h2>
            <p className="lead  text-muted">
              Kannattaa laittaa Ryyber korvan taakse. Jätealalle on luvattu ukkosmyrsky, kohta jyrisee!
            </p>
          </div>

          {/*<div className="mx-auto position-relative form-wrapper">
            <form
              className="form text-center"
              data-response-message-animation="slide-in-left"
            >
              <div className="form-group input--group">
                <input
                  id="subscribe-email"
                  type="email"
                  name="email"
                  className="form-control form-control-lg text-center"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button type="submit" className="btn btn-lg btn-alternate">
                Register
              </button>
            </form>

            <div className="response-message">
              <FontAwesomeIcon icon={["fas", "envelope"]} className="fa-3x" />
              <p className="font-md m-0">Check your email</p>
              <p className="response">
                We sent you an email with a link to get started. You’ll be in
                your account in no time.
              </p>
            </div>
  </div>*/}
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
