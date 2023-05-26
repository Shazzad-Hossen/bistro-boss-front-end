import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import MenuCard from '../shared/MenuCard';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    console.log(menu)
    useEffect(()=>{
        fetch('./menu.json')
        .then(res=>res.json()
        .then(data=>setMenu(data.filter(items=>items.category==='popular'))));

    },[])
    return (
        <div className='my-6'>
            <SectionTitle h1={"Check it out"} h2={"Our Popular Menu"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                menu.map((item,i)=> <MenuCard key={i} data={item}/>)
            }
            </div>
             <div className="flex justify-center">
             <button className='p-3 font-semibold border-b-4 border-b-[#333333] rounded-md'>VIEW FULL MENU</button>
             </div>

           

            
        </div>
    );
};

export default PopularMenu;