import React from 'react'

const Team = () => {
  return (
    <div className='container p-5'>
      <div className='row p-5 text-center'>
        <h2 className='mb-5'>People</h2>
        <div className='col '>
          <img
          src="/Media/rohit.jpeg"
          alt="img"
          style={{ width: "58%" , borderRadius:"50%"}}
          className="mt-3 "
        ></img>
        <h5 className='text-muted mt-3'>Rohit Maity</h5>
        <p className='text-muted'>Vibe coder, Broke</p>
        </div>
        <div className='col mt-5 p-4'>
          <p className='p-4 text-md-start'>Rohit bootstrapped and cloned Zerodha in 2025 to overcome the hurdles he faced during his decade long stint as a gooner. Today, Zerodha has changed the landscape of the Indian broking industry.

He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

Playing football is his zen.</p>

Connect on <a href="/demo" style={{ color: "#387ed1" , textDecoration: "none"}}>Homepage</a> / <a href="/demo" style={{ color: "#387ed1" , textDecoration: "none"}}>TradingQnA</a> / <a href="/demo" style={{ color: "#387ed1" , textDecoration: "none"}}>Twitter</a>
        </div>
      </div>
    </div>
  )
}

export default Team
