import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className='container p-5 mt-5 mb-5'>
        <div className='row'>
          <div className='col-5'>
            <h2 className='text-muted mb-4'>Unbeatable pricing</h2>
            <p className='text-muted mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="/demo" style={{ color: "#387ed1" , textDecoration: "none"}}>
              See pricing
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className='col-1'> </div>
          <div className='col-6'>
            <div>
              <img src='/Media/pricing-eq.svg' alt='img' style={{ width: "30%" }} ></img>
              <img src='/Media/other-trades.svg' alt='img' style={{ width: "30%" }}></img>
              <img src='/Media/pricing-eq.svg' alt='img' style={{ width: "30%" }}></img> 
            </div>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
