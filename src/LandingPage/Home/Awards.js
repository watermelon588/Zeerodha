import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-2 mb-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='Media/largestBroker.svg' alt='img'></img>
        </div>
        <div className='col-6 p-5 mt-3 text-muted'>
          <h1>Largest stock broker in India</h1>
          <p className='mb-5 mt-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Comodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            <div className='col-6'>
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
            <img src='Media/pressLogos.png' alt='img' style={{width:"90%"}} className='mt-3'></img>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Awards
