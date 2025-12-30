import React from "react";

const Stats = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 fs-6 text-muted">
          <h1 className="mb-5">Trust with confidence</h1>
          <div className="mt-4 mb-5">
            <h2 className="fs-3 text-muted">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="mt-4 mb-5">
            <h2 className="fs-3 text-muted">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like{" "}
              <b style={{ color: "#387ed1" }}>Our philosophies.</b>
            </p>
          </div>
          <div className="mt-4 mb-5">
            <h2 className="fs-3 text-muted">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mt-4 mb-5">
            <h2 className="fs-3 text-muted">Do better with money</h2>
            <p className="text-muted">
              With initiatives like <b style={{ color: "#387ed1" }}>Nudge</b>{" "}
              and <b style={{ color: "#387ed1" }}>Kill Switch</b>, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6 mt-5 p-5">
          <img
            src="/Media/ecosystem.png"
            alt="img"
            style={{ width: "100%" }}
          ></img>
          <div className="text-center mt-5">
            <a href="/products" style={{ color: "#387ed1" , textDecoration: "none"}}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/demo" style={{ color: "#387ed1" , textDecoration: "none"}}>
              Try kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <img
          src="Media/pressLogos.png"
          alt="img"
          style={{ width: "60%" }}
          className="mt-3 "
        ></img>
      </div>
    </div>
  );
};

export default Stats;
