'use client'
import React from 'react'

function Header() {
  return (
    <div className=' '>
        <div>
        <h1 className='text-3xl  bg-gradient-to-r from-indigo-900 to-fuchsia-900 bg-clip-text text-transparent font-bold' style={{marginTop:"20px", }}>TODO LIST</h1>
        <div className='flex items-center space-x-5 flex-1 justify-end w-full text-black'>
            <form action="" className='flex items-center space-x-5 rounded-md  shadow-md bg-white flex-1 md:flex-initial'></form>
        </div>
        </div>

        
  
    </div>

    
  )
}

export default Header