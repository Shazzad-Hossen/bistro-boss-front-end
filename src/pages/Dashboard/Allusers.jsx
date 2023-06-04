import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { API } from '../../utilities/variables';
import { BsFillTrashFill } from "react-icons/bs";

const Allusers = () => {
    const {data: users=[], refetch}= useQuery(['users'], async()=>{
        const res= await fetch(`${API}/users`);
        return res.json();

    });

    const handleUser=(id, role)=>{
        const uRole= role==='admin'? 'user': role==='user'? 'admin' : 'admin'
        fetch(`${API}/users/admin/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({role: uRole})
        })
        .then(res=>res.json())
        .then(data=>console.log(data));

        refetch();


    }

    const handleDelete=(user)=>{
        
    }

    return (
        <div className='px-4'>
            
     <h1 className='py-6 text-xl font-semibold'>All Users {users.length}</h1>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      
      
        {users.map((user,i)=> <tr key={i} className="odd:bg-base-200">
            <td>{i+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button onClick={()=>handleUser(user._id,user.role)} className='bg-[#73bb21] p-2 rounded-md font-semibold text-white'>{user.role==='admin'?  'Admin' : 'User'}</button></td>
            <td><button  className='bg-[#f54a4a] p-2 text-white rounded-md'><BsFillTrashFill className='w-[20px] h-[20px]'/></button></td>
            </tr>
            )}
     
      
    </tbody>
  </table>
        </div>
    );
};

export default Allusers;