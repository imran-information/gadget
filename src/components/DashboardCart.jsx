import React, { useEffect, useState } from 'react';
import { getToProduct, removeProduct } from '../utility';
import Card from './Card';

const DashboardCart = () => {
    const getProducts = getToProduct()
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState(0)


    useEffect(() => {
        setProduct(getProducts)


    }, [])

    const handleShortByProduct = () => {
        const sorted = [...getProducts].sort((a, b) => b.price - a.price)
        setProduct(sorted)
    }
    const handleProductRemove = (id) => {
        removeProduct(id)
        const getProducts = getToProduct()
        setProduct(getProducts)
    }
    return (
        <div className='my-10'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>Cart</div>
                <div className='flex justify-between gap-10 items-center'>
                    <h2 className='text-2xl font-bold'>Total cost: {price}</h2>
                    <button onClick={handleShortByProduct} className='btn btn-outline font-bold'>Short by Price</button>
                    <button className='btn btn-outline font-bold'>Purchase</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                {
                    product.map(product => <Card key={product.id} handleProductRemove={handleProductRemove} product={product}></Card>)

                }
            </div>
        </div>
    );
};

export default DashboardCart;