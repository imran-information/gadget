import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Cards = () => {
    const data = useLoaderData()
    // console.log(data);
    // const {name} = useParams()
    // console.log(name);

    const [products, setProducts] = useState(data)

    useEffect(() => {
        // const
        setProducts(data)
    }, [])


    return (
        <div className=' '>
            <h1 className='text-2xl text-center -mt-28 mb-10'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex'>
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