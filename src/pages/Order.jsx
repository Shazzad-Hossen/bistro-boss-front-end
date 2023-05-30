import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/shared/PageBanner';
import bg from '../assets/shop/banner2.jpg'
import { fetchMenu } from '../utilities/apiCaller';
import ItemCard from '../components/shared/ItemCard';



const Order = () => {
    const [tab,setTab]= useState(0);
    const [menu,setMenu]=useState([]);
    console.log(menu)

    const category=[
        { index : 0 , value: 'salad'},
        { index : 1 , value: 'pizza'},
        { index : 2 , value: 'soup'},
        { index : 3 , value: 'dessert'},
        { index : 4 , value: 'drinks'}
    ];
    const fetchData=async()=>{
        const params= category.find(c=>c.index===tab).value;
        const data= await fetchMenu(params);
        await setMenu(data);

    }
    useEffect(()=>{
        fetchData();
    },[tab])


    return (
        <div>
            <Helmet><title>BISTRO BOSS | Order</title></Helmet>
             <PageBanner bg={bg} title={"Order"} />

             <div className="flex justify-center items-center gap-2 py-4">
                {
                   category.map((c,i)=> <button key={i} onClick={()=>setTab(c.index)} className={`uppercase font-cinzel text-lg ${tab===c.index? 'border-b-2 border-orange-700':''}`}>{c.value}</button>) 
                }
             </div>
             <div className="flex justify-center"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    menu.map((m,i)=> <ItemCard key={i} data={m}/>)
                }

                </div></div>
            
        </div>
    );
};

export default Order;