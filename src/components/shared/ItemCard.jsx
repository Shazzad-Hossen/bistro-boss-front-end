import React from 'react';
import img1 from '../../assets/home/slide1.jpg'

const ItemCard = ({data}) => {
    return (
        <div className='max-w-[424px] relative '>
            <img className='h-[300px] object-cover  w-full' src={data.image} alt="" />
            <span className='absolute text-white bg-[#333333] p-1 rounded-lg text-lsm top-5 right-5 '>${data.price}</span>
            <div className="flex flex-col gap-5 justify-center items-center py-5 bg-[#F3F3F3]">
            <h1 className='font-bold text-xl'>{data.name}</h1>
            <p className='px-8 text-center'>{data.recipe}</p>

            <button className='uppercase bg-[#E8E8E8] border-b-[#BB8506] border-b-2 px-4 py-3 rounded-lg font-semibold text-[#BB8506] hover:bg-black'>add to cart</button>
            </div>


            
        </div>
    );
};

export default ItemCard;