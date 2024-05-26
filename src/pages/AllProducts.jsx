import React, { useEffect, useState } from 'react'
import SingleProduct from '../components/home/SingleProduct';

const AllProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("http://localhost:3000/shoes")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !==id))
    }
  return (
    <div className='flex justify-center gap-16 flex-wrap'>
        {
            products?.map((product) => <SingleProduct key={product.id} product={product} onDelete={handleDeleteProduct}></SingleProduct>)
        }
    </div>
  )
}

export default AllProducts