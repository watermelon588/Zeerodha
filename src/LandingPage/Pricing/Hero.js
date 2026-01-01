import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <div>
          <img
            src="/Media/pricing-eq.svg"
            alt="img"
            style={{ width: "20%" }}
            className="mx-5"
          ></img>
          <img
            src="/Media/other-trades.svg"
            alt="img"
            style={{ width: "20%" }}
            className="mx-5"
          ></img>
          <img
            src="/Media/pricing-eq.svg"
            alt="img"
            style={{ width: "20%" }}
            className="mx-5"
          ></img>
        </div>
        <div className="row px-5 ">
          <div className="col">
            <h3>Free equity delivery</h3>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col">
            <h3>Intraday and F&O trades</h3>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col">
            <h3>Free direct MF</h3>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
