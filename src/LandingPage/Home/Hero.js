import React from "react";

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="../Media/homeHero.png"
          alt="Heroimage"
          className="img-fluid mb-5"
        />

        <h2 className="fw-normal text-center mb-3 text-muted">
          Invest in everything
        </h2>

        <p className="fs-5 text-secondary text-center mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-zerodha mt-4 fs-5 mb-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
