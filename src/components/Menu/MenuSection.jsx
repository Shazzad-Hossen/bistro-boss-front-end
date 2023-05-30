import React from 'react';
import { Parallax } from 'react-parallax';
import MenuCard from '../shared/MenuCard';


const MenuSection = ({bg,title,des,data}) => {
    return (
        <div className='mt-8'>
            <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-200}
    >

        <div className="bg-black bg-opacity-60 mx-10 lg:mx-48 my-24  ">
            <h1 className='text-white font-cinzel text-5xl text-center pt-10 pb-5'>{title}</h1>
            <h1 className='text-white font-extralight text-lg text-center pb-10'>{des}</h1>
        </div>
        

       
        
    </Parallax>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
         {data.map((d,i)=> <MenuCard key={i} data={d}/>)}
    </div>
        </div>
    );
};

export default MenuSection;