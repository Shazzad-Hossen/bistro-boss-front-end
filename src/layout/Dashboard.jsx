import React from 'react';
import logo from '../assets/title-log.png'
import { MdMenu,MdRestaurantMenu } from "react-icons/md";
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BsFillCartFill, BsDatabaseAdd,BsJournalBookmarkFill,BsCardChecklist, BsFillPeopleFill, BsFillHouseDoorFill, BsMenuButtonWideFill, BsShop, BsFillPersonLinesFill  } from "react-icons/bs";

const Dashboard = () => {
    const [menu,setMenu]=useState(true);

    const navItem= <>
    

    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard"><BsFillHouseDoorFill/> ADMIN HOME</NavLink>
    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard/mycart"><BsDatabaseAdd/> ADD ITEMS</NavLink>
    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard/mycart"><BsCardChecklist/> MANAGE ITEMS</NavLink>
    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard/mycart"><BsJournalBookmarkFill/> MANAGE BOOKINGS</NavLink>
    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard/users"><BsFillPeopleFill/> ALL USERS</NavLink>

    <div className="border-[#dbdada] border-b-2 "></div>

    <NavLink className='flex items-center gap-1 font-semibold' to="/"><BsFillHouseDoorFill/> HOME</NavLink>
    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard/mycart"><BsMenuButtonWideFill/> MENU</NavLink>
    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard/mycart"><BsShop/> SHOP</NavLink>
    <NavLink className='flex items-center gap-1 font-semibold' to="/dashboard/mycart"><BsFillPersonLinesFill/> CONTACT</NavLink>
    
    </>
    return (
        <div>

            <div className="flex items-center justify-between bg-[#e2954c] p-4"> <img className='w-[200px]' src={logo} alt="" />
            <button className='lg:hidden' onClick={()=>setMenu(!menu)}>
                {menu? <MdMenu className='w-[30px] h-[30px]'/> : <MdRestaurantMenu className='w-[30px] h-[30px]'/>}
            </button>
            </div>


            <div className="flex items-start justify-start">

                <div className="bg-[#D1A054] h-[calc(100vh-85.75px)] w-[300px] hidden lg:block overflow-auto">
                    <div className="navcontainer flex flex-col gap-6 pt-5 px-4"> {navItem}</div>
                </div>
                <div className="w-full">

                   <Outlet/>
                </div>
            </div>
            <div className="lg:hidden"><div className={`absolute duration-1000 ${menu? 'left-[-1000px] top-[85.75px]': 'left-0 top-[85.75px]'}`}><div className="bg-[#D1A054] h-[calc(100vh-85.75px)] w-[300px] flex flex-col gap-6 pt-5 px-4 overflow-auto navcontainer">
                {navItem }
             
                
                
            </div></div></div>

            
            
        </div>
    );
};

export default Dashboard;