import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="border-bottom p-5 my-4 text-center">
          <h3 className="text-muted ">Zerodha Products</h3>
          <p className="text-muted fs-4">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className=" fs-5 text-muted">
            Check out our &nbsp;
            <a
              href="/demo"
              style={{ color: "#387ed1", textDecoration: "none" }}
            >
              investment offerings &nbsp;&nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
