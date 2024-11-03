import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Cards = () => {
    const data = useLoaderData()
    console.log(data);
    // const category = useParams()
    // console.log(category);

    const [products, setProducts] = useState(data)

    useEffect(() => {
        // const
        setProducts(data)
    }, [])


    return (
        <div className=''>
            <h1 className='text-2xl text-center -mt-28'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex mt-10'>
                <div>
                    <div className='flex flex-col bg-white w-56 gap-3 p-5 rounded-xl'>
                        <div>
                            <button className="btn w-full btn-primary font-bold text-lg text-white">All Category</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
                    {
                        products.map(product => <Card key={product.id} product={product}></Card>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Cards;