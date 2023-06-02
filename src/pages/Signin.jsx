import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import signinanim from "../assets/animations/login.json";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import fbico from '../assets/icon/fb.png'
import gitico from '../assets/icon/git.png'
import googleico from '../assets/icon/google.png'

const Signin = () => {
    const [eye,setEye]=useState(false);
    const [err,setErr]=useState("");
    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[]);

    const handleSignin=(e)=>{
        e.preventDefault();
        setErr("");
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        const capcha= form.capcha.value;
        if(password.length<6) setErr('Password must be at least 6 charecter');
        else if (validateCaptcha(capcha)==false) setErr('Invalid capcha validation');
    }

    
    return (
        <div className='h-screen flex flex-col md:flex-row justify-center items-center gap-5 w-full p-10'>
            <Lottie className='w-full max-w-[400px]' animationData={signinanim} loop={true} />

            <div className=" max-w-[400px] w-full">
                <h1 className=' text-center font-cinzel text-3xl mb-5'>Sign In</h1>
                <form onSubmit={handleSignin} className='flex flex-col gap-3 '>

                    <p className='text-xl'>Email</p>
                    <input className='border-2 rounded-md p-2 w-full' type="email" name="email" placeholder='Your email' />

                    <div className="flex justify-between items-center">
                    <p className='text-xl'>Password</p> <div onClick={()=>setEye(!eye)} className='pr-2'>
                        {
                            eye? <AiFillEye className='w-[25px] h-[25px]'/>:<AiFillEyeInvisible className='w-[25px] h-[25px]'/>
                        }
                    </div>
                    </div>
                    <input className='border-2 rounded-md p-2 w-full' type={`${eye? 'text': 'password'}`} name="password" placeholder='Your password' />
                    <LoadCanvasTemplate />
                    <input className='border-2 rounded-md p-2 w-full' type="text" name="capcha" placeholder='Type capcha here' />
                    <p className='h-3 text-red-600'>{err}</p>



                    <button className='bg-[#ff9634] p-2 text-white font-semibold text-lg rounded-md mt-5'>Sign In</button>
                    <p>New here? <Link className='text-[orange] font-semibold' to='/signup'>Create a new account.</Link></p>




                </form>

                <h1 className=' text-center mt-5'>Or sign in with</h1>
                <div className="flex justify-center items-center gap-4 py-8">
                  
                  <img className='w-[35px] cursor-pointer' src={fbico} alt="" />
                  <img className='w-[35px] cursor-pointer' src={googleico} alt="" />
                  <img className='w-[35px] cursor-pointer' src={gitico} alt="" />

                </div>



            </div>



            
        </div>
    );
};

export default Signin;