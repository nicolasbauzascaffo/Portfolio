import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar'

const Layout = () => {
    return (
        <div style={{width:'100%'}} >
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout;
