import React from 'react'
import LoginImg from '../assets/Login_page_img.jpg'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/Bs";


export default function Login() {
    return (
        <div className='h-screen w-full grid grid-cols-3 sm:grid-cols-2'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={LoginImg} alt="" />
            </div>
            <div className='bg-gray-900 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-400 p-4'>
                    <h1 className='text-blue-600 text-3xl font-bold font-sans text-center p-5'>Passcure</h1>
                    <div className='flex justify-between '>
                        <p className='bg-gray-200 flex items-center border shadow-lg hover:shadow-2xl px-6 py-2 relative'><FcGoogle className='mr-2' /> Google</p>
                        <p className='bg-gray-200 flex items-center border shadow-lg hover:shadow-2xl px-6 py-2 relative'><BsFacebook className='mr-2' /> Facebook</p>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="username">Username</label>
                        <input required className='border p-2' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="password">Password</label>
                        <input required className='border p-2' type="password" />
                    </div>
                    <button className='border w-full my-5 p-2 bg-blue-700 hover:bg-blue-600 text-white font-bold'>Sign In</button>
                    <div className='flex justify-between'>
                        <p className='flex items-center mr-2'><input className='mr-2 flex' type="checkbox" />Remember Me</p>
                        <p className='cursor-pointer'>Create an Account</p>
                    </div>
                </form>
            </div>

        </div>
    )
}
