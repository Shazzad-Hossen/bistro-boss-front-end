import React from 'react';

const SectionTitle = ({h1,h2}) => {
    return (
        <div className='text-center  py-5 '>
            <p className='text-[#D99904]'><i>---{h1}---</i></p>
           <div className="flex justify-center"> <h1 className='text-4xl uppercase  border-y-[3px] py-2 my-3 px-8' >{h2}</h1></div>
            
        </div>
    );
};

export default SectionTitle;