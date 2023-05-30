import React from 'react';
import img1 from '../../assets/home/slide1.jpg'

const ItemCard = ({data}) => {
    return (
        <div className='max-w-[424px] '>
            <img className='h-[300px] object-cover  w-full' src={img1} alt="" />
            <div className="flex flex-col gap-5 justify-center items-center py-5 bg-[#F3F3F3]">
            <h1 className='font-bold text-xl'>Caeser Salad</h1>
            <p className='px-8 text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

            <button className='uppercase bg-[#E8E8E8] border-b-[#BB8506] border-b-2 px-4 py-3 rounded-lg font-semibold text-[#BB8506] hover:bg-black'>add to cart</button>
            </div>


            
        </div>
    );
};

export default ItemCard;