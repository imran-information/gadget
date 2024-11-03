import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* NavBar  */}
            <div className='h-16 w-10/12 mx-auto'>
                <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-290px)] py-10 w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;