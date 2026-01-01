import React from 'react'

const Hero = () => {
  return (
     <div className="container-fluid px-0">
       <div className="bg-light border-bottom">
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-semibold">Support Portal</h2>
            <button className="btn btn-primary">My tickets</button>
          </div>

          <div className="input-group input-group-lg">
            <span className="input-group-text bg-white border-end-0">
              🔍
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row g-4">
          {/* LEFT SECTION */}
          <div className="col-md-8">
            <div className="accordion" id="supportAccordion">

              {[
                "Account Opening",
                "Your Zerodha Account",
                "Kite",
                "Funds",
                "Console",
                "Coin",
                "Charges & Taxes",
                "Corporate Actions",
                "Trading & Markets",
                "IPO",
                "Mutual Funds",
              ].map((item, index) => (
                <div className="accordion-item mb-3" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                    >
                      {item}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#supportAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Articles and help topics related to <b>{item}</b> will appear here.
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-md-4">
            {/* Announcement box */}
            <div className="p-3 mb-4 border-start border-4 border-warning bg-warning bg-opacity-10">
              <ul className="mb-0 ps-3">
                <li>
                  <a href="/kjihbn" className="text-decoration-none">
                    Evening session of MCX to remain closed on January 1, 2026
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/mnjkkji" className="text-decoration-none">
                    Current Takeovers and Delisting – January 2026
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="border rounded">
              <div className="bg-light px-3 py-2 fw-semibold">
                Quick links
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="/njijn" className="text-decoration-none">
                    1. Track account opening
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/njijn" className="text-decoration-none">
                    2. Track segment activation
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/njijn" className="text-decoration-none">
                    3. Intraday margins
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
