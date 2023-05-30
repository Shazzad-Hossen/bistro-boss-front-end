import React from "react";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import PopularMenu from "../components/Home/PopularMenu";
import Recommends from "../components/Home/Recommends";
import Featured from "../components/Home/Featured";
import Testimonials from "../components/Home/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet><title>BISTRO BOSS | HOME</title></Helmet>
      <Banner />
      <div className="px-5">
        <Category />

        <div className="bg-chef-service bg-cover p-2 sm:p-8 md:p-20 my-20">
          <div className=" bg-white p-5 md:p-24 bg-opacity-70 rounded-lg">
            <p className="text-3xl text-center font-cinzel">Bistro Boss</p>
            <p className=" mt-3 text-justify">
              Bistro Boss is a leading online food delivery website that brings
              gourmet meals right to your doorstep. With a diverse menu
              featuring a range of culinary delights, Bistro Boss caters to
              various taste preferences and dietary requirements. From sizzling
              steaks to flavorful vegetarian options, there's something to
              satisfy every craving. The website offers a seamless ordering
              experience, allowing customers to easily customize their meals and
              track their deliveries in real-time. With a commitment to quality
              ingredients, prompt service, and a user-friendly interface, Bistro
              Boss is the ultimate destination for a hassle-free and delectable
              dining experience at home.
            </p>
          </div>
        </div>

        <PopularMenu />

        <div className="bg-[#151515] h-[250px] w-full flex justify-center items-center">
          <p className="text-white sm:text-5xl text-2xl font-cinzel text-center">Call Us: +8801645288850</p>

        </div>

        <div className="flex justify-center "><Recommends/></div>


      </div>

      <Featured/>
      <Testimonials/>
    </div>
  );
};

export default Home;
