import React from "react";

const Comp = ({ product }) => {
  return (
    <div className="container">
      {product.v === 0 ? (
        <div className="row p-5">
          <div className="col mt-2">
            <img
              src={product.img}
              alt="img"
              style={{ width: "80%" }}
              className="mx-3"
            ></img>
          </div>
          <div className="col ">
            <h3 className="mt-5 p-4">{product.heading}</h3>
            <p className="mt-2 p-4">{product.text}</p>
            {product.Link[0] && product.Link[1] && (
              <div>
                <a
                  href="/demo"
                  style={{ textDecoration: "none", paddingLeft: "25px" }}
                >
                  {product.Link[0]}&nbsp;&nbsp;{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="/demo"
                  style={{ textDecoration: "none", paddingLeft: "25px" }}
                >
                  {product.Link[1]}&nbsp;&nbsp;{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            )}
            {product.Link[0] && !product.Link[1] && (
              <a
                href="/demo"
                style={{ textDecoration: "none", paddingLeft: "25px" }}
              >
                {product.Link[0]}&nbsp;&nbsp;{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="row p-5">
          <div className="col mt-5">
            <h3 className="mt-5 p-4">{product.heading}</h3>
            <p className="mt-2 p-4">{product.text}</p>
            <a
              href="/demo"
              style={{ textDecoration: "none", paddingLeft: "20px" }}
            >
              {product.Link[0]}&nbsp;&nbsp;{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col mt-2 ">
            <img src={product.img} alt="img" className="mx-3"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comp;
