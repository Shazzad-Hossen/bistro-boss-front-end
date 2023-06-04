import React, { useContext, useEffect, useState } from 'react';
import Lottie from "lottie-react";
import signupanim from "../assets/animations/signupanim.json";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import fbico from '../assets/icon/fb.png'
import gitico from '../assets/icon/git.png'
import googleico from '../assets/icon/google.png'
import { AuthContext } from '../providers/AuthProviders';
import { API } from '../utilities/variables';

const SignUp = () => {
    const {user, userSignUP, googleSignin, fbSignin}=useContext(AuthContext)
    const [eye,setEye]=useState(false);
    const [err,setErr]=useState("");
    const navigate =useNavigate();
    

    
    const signInwithFacebook=()=>{
        fbSignin()
        .then((result) => {
            navigate("/");
           
          }).catch((error) => {
            
            const errorMessage = error.message;
            setErr(errorMessage);
           
           
          });
    
    }
    
    const signInwithGoogle=()=>{
    googleSignin()
    .then((result) => {
      const name=result.user.displayName;
      const email=result.user.email;
      
      fetch(`${API}/users`,{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body : JSON.stringify( {name,email })

      })
      .then(res=>res.json())
      .then(()=>{
        
      });


        navigate("/");
       
      }).catch((error) => {
        
        const errorMessage = error.message;
        setErr(errorMessage);
       
       
      });

}
    const handleSignUp=(e)=>{
        e.preventDefault();
        setErr("");
        const form= e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
       
        if(name==='') setErr("Name can not be empty");
        else if(password.length<6) setErr('Password must be at least 6 charecter');
        else {
            userSignUP(email,password)
            .then((userCredential) => {


              fetch(`${API}/users`,{
                method: 'POST',
                headers: {
                  'content-type' : 'application/json'
                },
                body : JSON.stringify( {name,email })

              })
              .then(res=>res.json())
              .then(data=>console.log(data));

                
                navigate("/");
                
              })
              .catch((error) => {
                const errorMessage = error.message;
                setErr(errorMessage);
                
              });



        }
        
    }

    
    return (
        <div className='h-screen flex flex-col md:flex-row justify-center items-center gap-5 w-full p-10'>
            <Lottie className='w-full max-w-[400px]' animationData={signupanim} loop={true} />

            <div className=" max-w-[400px] w-full">
                <h1 className=' text-center font-cinzel text-3xl mb-5'>Sign Up</h1>
                <form onSubmit={handleSignUp} className='flex flex-col gap-3 '>

                <p className='text-xl'>Name</p>
                    <input className='border-2 rounded-md p-2 w-full' type="text" name="name" placeholder='Your full name' />

                    <p className='text-xl'>Email</p>
                    <input required className='border-2 rounded-md p-2 w-full' type="email" name="email" placeholder='Your email' />

                    <div className="flex justify-between items-center">
                    <p className='text-xl'>Password</p> <div onClick={()=>setEye(!eye)} className='pr-2'>
                        {
                            eye? <AiFillEye className='w-[25px] h-[25px]'/>:<AiFillEyeInvisible className='w-[25px] h-[25px]'/>
                        }
                    </div>
                    </div>
                    <input className='border-2 rounded-md p-2 w-full' type={`${eye? 'text': 'password'}`} name="password" placeholder='Your password' />
                
                
                    <p className='h-3 text-red-600'>{err}</p>



                    <button className='bg-[#ff9634] p-2 text-white font-semibold text-lg rounded-md mt-5'>Sign Up</button>
                    <p>Already have an account? <Link className='text-[orange] font-semibold' to='/signin'>Sign in here.</Link></p>




                </form>

                <h1 className=' text-center mt-5'>Or sign in with</h1>
                <div className="flex justify-center items-center gap-4 py-8">
                  
                  <img onClick={signInwithFacebook}  className='w-[35px] cursor-pointer' src={fbico} alt="" />
                  <img onClick={signInwithGoogle} className='w-[35px] cursor-pointer' src={googleico} alt="" />
                  <img className='w-[35px] cursor-pointer' src={gitico} alt="" />

                </div>



            </div>



            
        </div>
    );
};

export default SignUp;