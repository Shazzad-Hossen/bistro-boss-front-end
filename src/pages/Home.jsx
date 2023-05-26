import React from 'react';
import Banner from '../components/Home/Banner';
import Category from '../components/Home/Category';
import PopularMenu from '../components/Home/PopularMenu';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/>

          <div className="bg-chef-service bg-cover p-20 my-20">
            <div className=" bg-white p-24">
              <p className='text-3xl text-center font-cinzel'>Bistro Boss</p>
              <p className='text-center mt-3 text-justify'>Bistro Boss is a leading online food delivery website that brings gourmet meals right to your doorstep. With a diverse menu featuring a range of culinary delights, Bistro Boss caters to various taste preferences and dietary requirements. From sizzling steaks to flavorful vegetarian options, there's something to satisfy every craving. The website offers a seamless ordering experience, allowing customers to easily customize their meals and track their deliveries in real-time. With a commitment to quality ingredients, prompt service, and a user-friendly interface, Bistro Boss is the ultimate destination for a hassle-free and delectable dining experience at home.</p>
            </div>
          </div>

          <PopularMenu/>

        </div>
    );
};

export default Home;