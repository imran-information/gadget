import React from 'react';
import Banner from '../components/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';


const Home = () => {
    const categoryData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Categories categories={categoryData}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;