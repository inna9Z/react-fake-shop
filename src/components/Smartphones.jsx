import { useEffect, useState } from 'react';
import axios from 'axios';
import Smartphone from './Smartphone';
import Loading from './Loading';

const Smartphones = () => {
    const [smartphones, setSmartphones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    console.log(smartphones);

    useEffect(() => {
        const getDataSmartphones = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/category/smartphones');
                if (response.status === 200) {
                    setSmartphones(response.data.products);
                } else {
                    throw new Error(`Failed to fetch product data with status: ${response.status}`);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getDataSmartphones();
    }, []);

    return (
        <div>
            {loading && <Loading />}
            {error && <p>{error}</p>}
            <div>
                {!error && smartphones.map((smartphone) => (
                    <Smartphone key={smartphone.id} smartphone={smartphone} />
                ))}
            </div>

        </div>
    );
};

export default Smartphones;
