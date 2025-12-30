import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Universe from './Universe'
import Left from './Left'
import Right from './Right'
import Footer from '../Footer'

const ProductPage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Universe/>
        <div>
            <Left/>
            <Right/>
        </div>
      <Footer/>
    </>
  )
}

export default ProductPage
