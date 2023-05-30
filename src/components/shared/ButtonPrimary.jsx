import React from 'react';

const ButtonPrimary = ({text}) => {
    return (
        <div className="flex justify-center">
            <button className='border-b-2 border-black rounded-md p-2 my-4 text-lg font-bold'>{text}</button>
        </div>
    );
};

export default ButtonPrimary;