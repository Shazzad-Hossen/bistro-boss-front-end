import React from 'react';

const PageBanner = ({bg, title }) => {
    const containerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover'
        
      };
    return (
        <div>
            <div className="py-36 px-10 lg:px-48"  style={containerStyle}>
                
                <div className="bg-black bg-opacity-60 text-white text-center py-12 px-6">
                    <h1 className='uppercase  text-3xl sm:text-7xl font-cinzel '>{title}</h1>
                    <p className='font-cinzel text-lg pt-10'>Would you like to try a dish?</p>
                    </div> </div>
            
        </div>
    );
};

export default PageBanner;