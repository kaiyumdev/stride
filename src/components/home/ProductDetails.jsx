import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductDetails = () => {
    const shoe = useLoaderData();
    const {title, brand, price, description, image_url} = shoe;
  return (
    <div className=' flex justify-center'>
        <div className="card w-96 glass">
  <figure><img src={image_url} alt="shoe!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="text-xl font-semibold">{brand}</h3>
    <h3 className="text-xl font-semibold">{price}</h3>
    <p>{description}</p>
  </div>
</div>
    </div>
  )
}

export default ProductDetails