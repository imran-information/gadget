import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {


    return (
        <div className=''>
            <h1 className='text-3xl text-center font-bold -mt-28 mb-10'>Explore Cutting-Edge Gadgets</h1>
            <div className=' flex justify-between mb-10 bg-[#9538E2] gap-3 p-5 rounded-xl'>
                <NavLink to='/' className={({ isActive }) => `btn btn-primary font-bold text-lg ${isActive ? ' text-purple-950' : 'text-white'}`}> All Product</NavLink>
                {
                    categories.map(category => <NavLink to={`/category/${category.category}`} key={category.category} className={({ isActive }) => `btn btn-primary font-bold text-lg ${isActive ? ' text-purple-950' : 'text-white'}`}>{category.category}</NavLink>)
                }
            </div>


        </div >
    );
};

export default Categories;