import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu,MdRestaurantMenu } from "react-icons/md";
import logo from '../../assets/title-log.png'

const Navbar = () => {
    const [menu,setMenu]=useState(false);
    

    

    const navItems= <>
    <Link to='/'>HOME</Link>
    <Link to='/menu'>OUR MENU</Link>
    <Link to='/order'>ORDER</Link>
    
   
    </>
    return (
        <div className='fixed z-10 max-w-[1280px] w-full'>

            <div className="bg-[#000000]  bg-opacity-50 p-4 flex  justify-between px-3 text-white">
                <img className='w-[150px]' src={logo} alt="" />

                <div className="hidden md:block"><div className="flex items-center gap-3 ">{navItems}</div></div>

                {menu && <div className="md:hidden"><div className="absolute top-16 right-4 bg-white shadow-xl text-slate-900 font-semibold p-6 rounded-md "><div className="flex items-end gap-3 flex-col ">{navItems}</div></div></div>}

                <div onClick={()=>setMenu(!menu)} className="md:hidden">
                    {menu? <MdRestaurantMenu className='text-white w-[25px] h-[25px]'/> :<MdMenu className='text-white w-[25px] h-[25px]'/> }

                </div>
                

            </div>
            
        </div>
    );
};

export default Navbar;