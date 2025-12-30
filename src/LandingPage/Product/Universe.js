import React from "react";

const Universe = () => {
  return (
    <div className="container mt-3 px-5">
      <div className="text-center p-5">
        <h3 className="text-muted my-5 p-3">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="/demo"
            style={{ textDecoration: "none", paddingLeft: "15px" }}
          >
            Zerodha.tech blog.
          </a>
        </h3>
        <h3 className="text-muted my-4 p-1">The Zerodha Universe</h3>
        <p className="text-muted fs-5 mt-2 mb-5 p-1">
          Extend your trading and investment experience even further with our
          partner platform
        </p>
      </div>

      <div className="row px-5 py-3">
        <div className="col">
          <img
            src="/Media/zerodhaFundhouse.png"
            alt="img"
            style={{ width: "57%" }}
            className="m-2"
          ></img>
          <p style={{ fontSize: "12px", textAlign: "center" }} className="mt-1">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            src="/Media/sensibullLogo.svg"
            alt="img"
            style={{ width: "67%" }}
            className="m-2"
          ></img>
          <p style={{ fontSize: "12px", textAlign: "center" }} className="mt-2">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col">
          <img src="/Media/tijori.svg" alt="img" style={{ width: "50%" }}></img>
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row px-5 py-2">
        <div className="col">
          <img
            src="/Media/streak-logo.png"
            alt="img"
            style={{ width: "50%" }}
            className="mx-4"
          ></img>
          <p style={{ fontSize: "12px", textAlign: "center" }} className="mt-2">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col">
          <img
            src="/Media/smallcase-logo.png"
            alt="img"
            style={{ width: "55%" }}
            className="m-2"
          ></img>
          <p style={{ fontSize: "12px", textAlign: "center" }} className="mt-1">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <img
            src="/Media/ditto-logo.png"
            alt="img"
            style={{ width: "40%" }}
            className="m-2"
          ></img>
          <p style={{ fontSize: "12px", textAlign: "center" }} className="mt-1">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="text-center my-5">
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

export default Universe;
