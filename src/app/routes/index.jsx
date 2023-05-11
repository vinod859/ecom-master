import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/navpages/Home';
import Contact from '../pages/navpages/Contact';
import Login from '../pages/auth/Login';
import Navbar from '../components/Navbar';
import ProductList from '../pages/navpages/ProductList';
import ProductDetails from '../pages/product/ProductDetails';
import Cart from '../pages/cart';

const MainRoute = () => {
    const isLoggedIn = true;
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<Home />} path='/' />


                <Route element={<ProductList />} path='/product-list/:search' />
                <Route element={<ProductDetails />} path='/product-details/:id' />
                <Route element={<Cart />} path='/cart' />

                <Route element={<Login />} path='/login' />
                <Route element={<Contact />} path='/contact' />
                <Route element={<Home />} path='*' />
            </Routes>
        </>
    )
}

export default MainRoute