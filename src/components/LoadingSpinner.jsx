import React from 'react';
import Lottie from "lottie-react";
import loadinganim from "../assets/animations/loading.json";

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie className='w-full max-w-[400px]' animationData={loadinganim} loop={true} />

            
        </div>
    );
};

export default LoadingSpinner;