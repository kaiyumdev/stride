import { useLoaderData } from "react-router-dom";
import SingleProduct from "../components/home/SingleProduct";


const Dashboard = () => {
    const data = useLoaderData()
    return (
        <div>
        <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

        <div className="flex gap-16 justify-center space-x-4 flex-wrap">
           {
            data.map((product) => <SingleProduct key={product._id} product={product}></SingleProduct>)
           }
        </div>
        
    </div>
    );
};

export default Dashboard;