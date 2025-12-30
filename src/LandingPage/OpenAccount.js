import React from 'react'

const OpenAccount = () => {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h2 className="fw-normal text-center mb-3 text-muted">
          Open a Zerodha account
        </h2>

        <p className="fs-5 text-secondary text-center mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="btn btn-zerodha mt-4 fs-5 mb-5 "
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  )
}

export default OpenAccount
