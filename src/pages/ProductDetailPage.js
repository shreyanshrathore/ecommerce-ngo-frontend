import React from 'react'
import ProductDetail from '../features/product-list/components/productDetail'
import NavBar from '../features/navbar/Navbar'

const productDetailPage = () => {
  return (
    <div>
        <NavBar/>
        <ProductDetail/>
    </div>
  )
}

export default productDetailPage