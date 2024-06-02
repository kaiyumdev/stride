import { Link } from "react-router-dom";

const SingleProduct = ({product, onDelete}) => {
  const {_id, title, brand, price, description, image_url} = product

  const handleDelete = async() => {
    alert("Ary you want to delete this?")
    await fetch(`http://localhost:5000/shoes/${_id}`, {
      method:"DELETE"
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      onDelete(_id)
    })
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/products/${_id}`}>See Details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`/dashboard/allProducts/edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
           Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
