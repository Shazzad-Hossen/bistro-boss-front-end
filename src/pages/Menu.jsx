import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/shared/PageBanner';
import bg from '../assets/menu/banner3.jpg'
import { useLoaderData } from 'react-router-dom';
import MenuSection from '../components/Menu/MenuSection';
import saladbg from '../assets/menu/salad-bg.jpg'
import dessertbg from '../assets/menu/dessert-bg.jpeg'
import pizzabg from '../assets/menu/pizza-bg.jpg'
import soupbg from '../assets/menu/soup-bg.jpg'
import ButtonPrimary from '../components/shared/ButtonPrimary';
import SectionTitle from '../components/shared/SectionTitle';
import MenuCard from '../components/shared/MenuCard';

const Menu = () => {
    const [menu,setMEnu]=useState(useLoaderData());
    const [dessert,setDessert]=useState(menu.filter(data=>data.category==='dessert'));
    const [pizza,setPizza]=useState(menu.filter(data=>data.category==='pizza'));
    const [salad,setSalad]=useState(menu.filter(data=>data.category==='salad'));
    const [soup,setSoup]=useState(menu.filter(data=>data.category==='soup'));
    const [offered,setOffered]=useState(menu.filter(data=>data.category==='offered'));
    
   
    
    return (
        <div>
             <Helmet><title>BISTRO BOSS | MENU</title></Helmet>
             <PageBanner bg={bg} title={"Our menu"} />

             <SectionTitle h1={"Don't miss"} h2={"today's offer"}/>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-18 mb-24">
         {offered.map((d,i)=> <MenuCard key={i} data={d}/>)}
    </div>

             <MenuSection bg={dessertbg} title={"Desserts"} des={" dettails about the  item"} data={dessert}/>
             <ButtonPrimary text={"Order Your Favourite Food"} />
             <MenuSection bg={pizzabg} title={"Pizza"} des={" dettails about the  item"} data={pizza}/>
             <ButtonPrimary text={"Order Your Favourite Food"} />
             <MenuSection bg={saladbg} title={"Salad"} des={" dettails about the  item"} data={salad}/>
             <ButtonPrimary text={"Order Your Favourite Food"} />
             <MenuSection bg={soupbg} title={"Soup"} des={" dettails about the  item"} data={soup}/>
             <ButtonPrimary text={"Order Your Favourite Food"} />
            
        </div>
    );
};

export default Menu;