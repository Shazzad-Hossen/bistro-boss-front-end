import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('./reviews.json')
        .then(res=>res.json())
        .then(data=>setData(data));

    },[])

    return (
        <div className='my-20'>
            <SectionTitle h1={"What Our Clients Say"} h2={"Testimonials"}/>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    data.map((data,i)=><SwiperSlide
                    key={i}
                    >
                        <div className=" mx-20 ">
                        <div className="flex justify-center items-center flex-col gap-5 mb-8"><Rating style={{ maxWidth: 250 }} value={data.rating} />
                        <FaQuoteLeft className='w-[100px] h-[100px]'/></div>
                            <p className='text-center'>{data.details}</p>
                            <p className='text-center text-3xl text-[#CD9003] mt-7'>{data.name}</p>
                        </div>
                        
                       
                    </SwiperSlide>)
                }
        
        
      </Swiper>
            
        </div>
    );
};

export default Testimonials;