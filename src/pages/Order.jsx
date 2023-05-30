import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/shared/PageBanner';
import bg from '../assets/shop/banner2.jpg'

const Order = () => {
    return (
        <div>
            <Helmet><title>BISTRO BOSS | Order</title></Helmet>
             <PageBanner bg={bg} title={"Order"} />
            
        </div>
    );
};

export default Order;