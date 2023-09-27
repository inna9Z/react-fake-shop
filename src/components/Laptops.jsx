import { useEffect, useState } from "react";
import Laptop from "./Laptop";
import axios from "axios";
import Loading from "./Loading";



const Laptops = () => {
    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const getDataLaptops = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/category/laptops');
                if (response.status === 200) {
                    setLaptops(response.data.products);
                } else {
                    throw new Error(`Failed to fetch product data with status: ${response.status}`);
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }

        }
        getDataLaptops();
    }, [])
    return (
        <div>

            <div>
                {loading && <Loading />}
                {error && <p>{error}</p>}
                <div>
                    {!error && laptops.map((laptop) => (
                        <Laptop key={laptop.id} laptop={laptop} />
                    ))}
                </div>

            </div>

        </div>
    )
}



export default Laptops
