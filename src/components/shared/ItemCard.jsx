import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import {API} from '../../utilities/variables.js'
import useCart from '../../hooks/useCart';

const ItemCard = ({data}) => {
    const {user}=useContext(AuthContext);
    const [,refetch]=useCart();
  
    const navigate= useNavigate();
    const location=useLocation();
   



    const handleAddToCart=(data)=>{
        const food= {
            itemID : data._id, 
            name : data.name, 
            image : data.image, 
            price : data.price, 
            email : user.email

        }
        
        if(user) {
           fetch(`${API}/carts`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
           })
           .then(res=>res.json())
           .then(data=>{

            if(data.acknowledged===true)
            {
             refetch()
            
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
            



           });

        }
        else {
            Swal.fire(
                'Opps!',
                'You need to sign in first',
                'info'
              ).then(result=>{
                if (result.isConfirmed)  navigate('/signin',{state:{from:location}});
              })
        }
    }



    return (
        <div className='max-w-[424px] relative '>
            <img className='h-[300px] object-cover  w-full' src={data.image} alt="" />
            <span className='absolute text-white bg-[#333333] p-1 rounded-lg text-lsm top-5 right-5 '>${data.price}</span>
            <div className="flex flex-col gap-5 justify-center items-center py-5 bg-[#F3F3F3]">
            <h1 className='font-bold text-xl'>{data.name}</h1>
            <p className='px-8 text-center'>{data.recipe}</p>

            <button onClick={()=>handleAddToCart(data)} className='uppercase bg-[#E8E8E8] border-b-[#BB8506] border-b-2 px-4 py-3 rounded-lg font-semibold text-[#BB8506] hover:bg-black'>add to cart</button>
            </div>


            
        </div>
    );
};

export default ItemCard;