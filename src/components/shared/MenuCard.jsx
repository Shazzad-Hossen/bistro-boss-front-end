import React from 'react';

const MenuCard = ({data}) => {
    const {image,price,recipe, name}=data;
    return (
        <div className='flex items-center gap-3'>
            <img className='rounded-r-full rounded-bl-full w-[80px] h-[70px] shadow-lg border-2' src={image} alt="" />
            <div className="">
                <h1 className='font-cinzel text-xl '>{name}----</h1>
                <p className='text-[#999999]'>{recipe}</p>
            </div>
            <p className='ml-6 text-[#BB8506]'>{price}</p>
            
        </div>
    );
};

export default MenuCard;