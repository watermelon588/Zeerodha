import React from 'react'

const Education = () => {
  return (
    <div className='container p-5'>
      <div className='row p-2'>
        <div className='col'>
          <img src='/Media/education.svg' alt='img'></img>
        </div>
        <div className='col mt-4'>
          <h2 className='text-muted mb-5'>Free and open market education</h2>
          <div className=' p-2'>
            <p >Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="/demo" style={{ color: "#387ed1" , textDecoration: "none"}}>
                Varsity &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className=' p-2 mt-4'>
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="/demo" style={{ color: "#387ed1" , textDecoration: "none"}}>
                TradingQ&A &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
