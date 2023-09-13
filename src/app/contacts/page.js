"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const Contact = () => {

 


  



  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen '>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-black/75 flex items-center justify-center text-4xl pt-8 underline underline-offset-4'>
          Contact Us.
        </h1>
        <form  className='bg-white text-black flex flex-col items-center mt-6 rounded-md' style={{width: '600px', height: '400px'}}>
          <div className='flex mt-5 '>
            <input  className='p-2 m-2 font-bold appearance-none border-solid border-2 border-black shadow-lg rounded-md text-black' type='text' name='first_name' placeholder='First Name'/>
            <input  className='p-2 m-2 font-bold appearance-none border-solid border-2 border-black shadow-lg rounded-md text-black' type='text' name='last_name' placeholder='Last Name'/>
          </div>
          <div className='mt-2 block'>
            <input style={{width: '480px'}}  className='flex font-bold items-start justify-start p-2 m-2 appearance-none border-solid border-2 border-black shadow-lg rounded-md text-black' name='email' type='text' placeholder='Email'/>
            
          </div>
          <div className='mt-2 block'>
            <input style={{width: '480px'}}  name='phone_number' className='flex font-bold items-start justify-start p-2 m-2 appearance-none border-solid border-2 border-black shadow-lg rounded-md text-black' type='tel' placeholder='Phone Number'/>
            
          </div>
          <div className='mt-2 block'>
            <input name='msg'    style={{width: '480px'}} className='flex font-bold items-start justify-start px-2 m-2 !pb-10 pt-1 appearance-none border-solid border-2 border-black shadow-lg rounded-md text-black' type='textfield' placeholder='Messeage'/>
            
          </div>
          <div className='mt-2 block'>
            
              <input type='submit' className='bg-black text-white font-medium hover:bg-white hover:text-black hover:font-bold p-4 !px-10 rounded-full flex items-center justify-center' placeholder='Submit'/>
            
            

          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact