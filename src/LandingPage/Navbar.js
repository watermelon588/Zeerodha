import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container-fluid mx-5 px-5 ">
          <img src="/Media/logo.svg" alt="img" style={{ width: "10%", margin: "0 auto" }}></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active text-muted px-3" aria-current="page" to="/signup">
                Signup
              </Link>
              <Link class="nav-link active text-muted px-3" to="/about">
                About
              </Link>
              <Link class="nav-link active text-muted px-3" to="/product">
                Products
              </Link>
              <Link class="nav-link active text-muted px-3" to="/pricing">
                Pricing
              </Link>
              <Link class="nav-link active text-muted px-3" to="/support">
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
