import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import img1 from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='bg-featured  bg-fixed my-20'>
            <div className=" bg-black md:px-24 px-6 py-20 bg-opacity-40">
            <div className='text-center  py-5 '>
            <p className='text-[#D99904]'><i>---Check it out---</i></p>
           <div className="flex justify-center"> <h1 className='text-4xl uppercase  border-y-[3px] py-2 my-3 px-8 text-white' >Featured Item</h1></div>
            
        </div>
            
            <div className="flex  flex-col lg:flex-row gap-5 justify-center items-center">
                <img src={img1} className='max-w-[500px] w-full max-h-[300px]' alt="" />
                <div className="">
                    <p className='uppercase text-2xl text-white text-center lg:text-start'>Where can i get some?</p>
                    <p className='text-white mt-4 text-center lg:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque error ea fugiat possimus ad, repudiandae temporibus totam doloremque minima quasi nisi, quidem atque dicta dolor veniam reprehenderit praesentium iure dolore.</p>
                    <div className="flex justify-center lg:justify-start mt-4">
             <button className='p-3 font-semibold border-b-4 border-b-[#ffffff] rounded-md text-white'>VIEW FULL MENU</button>
             </div>
                </div>

            </div>
            </div>
            
        </div>
    );
};

export default Featured;