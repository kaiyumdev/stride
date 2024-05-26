import { Link } from "react-router-dom";

const SingleProduct = ({product}) => {
  const {id, title, brand, price, description, image_url} = product

  const handleDelete = async() => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method:"DELETE"
    }).then((res) => res.json()).then((data) => console.log(data))
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
            <Link to={`/products/${id}`}>See Details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`/products/${id}`}>Edit</Link>
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
