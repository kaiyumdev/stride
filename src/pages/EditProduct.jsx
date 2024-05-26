import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
    const shoe = useLoaderData()

    const [id, setId] = useState(shoe.id)
    const [title, setTitle] = useState(shoe.title)
    const [price, setPrice] = useState(shoe.price)
    const [brand, setBrand] = useState(shoe.brand)
    const [description, setDescription] = useState(shoe.description)
    const [image_url, setImageUrl] = useState(shoe.image_url)
    const handleSubmit = async(e) => {
        e.preventDefault()
        alert("Are you want to Edit shoe")
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description =  form.description.value;
        const image_url = form.image_url.value;
        const data = {id, title, brand, price, description, image_url}
        await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            console.log(data)
            toast("Edit shoes successfully!");
        })
    }
  return (
    <div>
        <h1 className='text-5xl font-bold text-center'>Edit Product</h1>
        <div className='my-16'>
            <form onSubmit={handleSubmit}>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="" placeholder='title'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={brand} onChange={(e) => setBrand(e.target.value)} type="text" name="brand" id="" placeholder='brand'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="" placeholder='price' />
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="" placeholder='description'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={image_url} onChange={(e) => setImageUrl(e.target.value)} type="text" name="image_url" id="" placeholder='image_url'/>
                </div>
                <div className='mt-2'>
                    <input className='bg-gray-100 p-4 w-full border border-black rounded-lg ' value={id} onChange={(e) => setId(e.target.value)} type="text" name="id" id="" placeholder='id'/>
                </div>
                <div className='mt-2 flex justify-center items-center'>
                    <input className='btn mt-4 w-full'  type="submit" value="Edit product" />
                </div>
                <ToastContainer />
            </form>
        </div>
    </div>
  )
}

export default EditProduct