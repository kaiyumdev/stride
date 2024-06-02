import React, { useEffect, useState } from 'react'
import SingleProduct from '../components/home/SingleProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/shoes")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !==id))
        toast("Delete shoe successfully!");
    }
  return (
    <div className='flex justify-center gap-16 flex-wrap'>
        <div>
        <ToastContainer />
        </div>
        {
            products?.map((product) => <SingleProduct key={product._id} product={product} onDelete={handleDeleteProduct}></SingleProduct>)
        }
        <div>
       
        </div>
    </div>
  )
}

export default AllProducts