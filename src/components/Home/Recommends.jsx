import React, { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import ItemCard from '../shared/ItemCard';

const Recommends = () => {
const [item,setItem]=useState([1,2,3]);

    return (
        <div>
            <SectionTitle h1={"Should Try"} h2={"Chef Recommands"}/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    item.map((item,i)=><ItemCard data={item} key={i}/>)
                }
            </div>
            

            
        </div>
    );
};

export default Recommends;