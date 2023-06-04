import React from 'react';
import bg from '../../assets/home/banner.jpg'
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/shared/PageBanner';
import useCart from '../../hooks/useCart';
import { BsFillTrashFill } from "react-icons/bs";
import { API } from '../../utilities/variables';
import Swal from 'sweetalert2'

const Mycart = () => {
    const [cart,refetch]=useCart();
    console.log(cart);
    const totalPrice=cart.reduce((sum,item)=> item.price + sum , 0);


    const handleDelete= (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${API}/carts/${id}`,{
                    method: 'DELETE'
                })
                .then(res=> res.json())
                .then(data=>{
                    if(result.acknowledged===true) {
                        Swal.fire(
                            'Deleted!',
                            'Item has been deleted.',
                            'success'
                          )

                    }
                });
        
                refetch();



             
            }
          })


        
       
        
     
    }
    return (
        <div>
           <Helmet><title>BISTRO BOSS | Cart</title></Helmet>
             <PageBanner bg={bg} title={"Cart"} />

             <div className=" my-6">

                <div className="flex justify-between items-center text-2xl font-semibold">
                    <p>Total Items: {cart.length}</p>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <button className='bg-[green] py-1 px-2 text-lg text-white rounded-md'>Pay</button>
                </div>
                <div className="">
                <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL.</th>
        <th>IMAGE</th>
        <th>NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      
      
        {cart.map((item,i)=> <tr key={i} className="odd:bg-base-200">
            <td>{i+1}</td>
            <td><img className='w-[60px] border-2 p-1' src={item.image} alt="" /></td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td><button onClick={()=>handleDelete(item._id)} className='bg-[#f54a4a] p-2 text-white rounded-md'><BsFillTrashFill className='w-[20px] h-[20px]'/></button></td>
            </tr>
            )}
     
      
    </tbody>
  </table>
                </div>




             </div>

        </div>
    );
};

export default Mycart;