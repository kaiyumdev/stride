import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        alert("Are you want to add product")
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description =  form.description.value;
        const image_url = form.image_url.value;
        const data = {id, title, brand, price, description, image_url}

        await fetch("http://localhost:3000/shoes", {
            method: "POST",
            headers:{ "Content-type": "application/json"},
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            console.log(data)
            toast("Add Product Successfully!");
        })
    }
  return (
    <div>
        <h1 className='text-5xl font-bold text-center'>Add Product</h1>
        <div className='my-16'>
            <form onSubmit={handleSubmit}>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="title" id="" placeholder='title'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="brand" id="" placeholder='brand'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="price" id="" placeholder='price' />
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="description" id="" placeholder='description'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="image_url" id="" placeholder='image_url'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' type="text" name="id" id="" placeholder='id'/>
                </div>
                <div className='mt-2 flex justify-center items-center'>
                    <input className='btn mt-4 w-full'  type="submit" value="Add product" />
                </div>
                <ToastContainer />
            </form>
        </div>
    </div>
  )
}

export default AddProduct