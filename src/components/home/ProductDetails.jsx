import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductDetails = () => {
    const shoe = useLoaderData()
  return (
    <div>ProductDetails: {shoe.id}</div>
  )
}

export default ProductDetails