import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Universe from './Universe'
import Comp from './Comp'
import Footer from '../Footer'
import productUtil from '../productUtil.js'

const ProductPage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Comp product={productUtil[0]}/>
      <Comp product={productUtil[1]}/>
      <Comp product={productUtil[2]}/>
      <Comp product={productUtil[3]}/>
      <Comp product={productUtil[4]}/>
      <Universe/>
      <Footer/>
    </>
  )
}

export default ProductPage
