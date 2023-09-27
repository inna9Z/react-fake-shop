import { useEffect, useState } from 'react';
import axios from 'axios';
import Vegetable from './Vegetable';
import Loading from './Loading';

const Vegetables = () => {
    const [vegetables, setVegetables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/category/groceries');
                if (response.status === 200) {
                    setVegetables(response.data.products);
                } else {
                    throw new Error(`Failed to fetch product data with status: ${response.status}`);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div>
            {loading && <Loading />}
            {error && <p>{error}</p>}
            <div>
                {!error && vegetables.map((vegetable) => (
                    <Vegetable key={vegetable.id} vegetable={vegetable} />
                ))}
            </div>

        </div>
    );
};

export default Vegetables;

