import SingleProduct from "./SingleProduct";


const Products = ({data}) => {
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

            <div className="flex gap-2 justify-center">
               {
                data.map((product) => <SingleProduct key={product.id} product={product}></SingleProduct>)
               }
            </div>
            
        </div>
    );
};

export default Products;