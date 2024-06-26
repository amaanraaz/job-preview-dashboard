import React from 'react'
import {Logo,Icon1,Icon2, Icon3, Bell, Ellipse, Company, Arrow} from '../assets'

const Header = () => {
  return (
    <div className='w-[1664px] h-[61px] mt-[24px] ml-[40px] flex justify-between'>
        {/* Logo sectio */}
        <div className=''>
            <img src={Logo} className='w-[100px] h-[61px]'></img>
        </div>
        {/* Header Options */}
        <div className='border-slate-300  border rounded-full w-[538px] h-[74px] px-2 flex justify-between items-center'>
            {/* Selected and Highlighted section */}
            <div className='w-[109px] h-[58px] flex pl-2 gap-2 items-center bg-red rounded-full '>
                <img src={Icon1}></img>
                <h1 className='text-white text-[20px] font-[500]'>Jobs</h1>
            </div>
            <div className='flex justify-between items-center gap-1'>
                <img src={Icon2}></img>
                <div className='-ml-1 -mt-5'>
                        <img src={Ellipse}></img>
                </div>
                <h1 className='text-text1 text-[20px] font-[500]'>Messages</h1>                
            </div>
            <div className='flex justify-between items-center gap-2'>
                <img src={Icon3} className=''></img>
                <h1 className='text-text1 text-[20px] font-[500]'>Payments</h1>
            </div>
        </div>
        {/* Notification and profile section */}
        <div className='p-[10px] flex gap-[16px]'>
            <div className='flex justify-between items-center gap-4 cursor-pointer'>
                <div className='flex'>
                    <img src={Bell}></img>
                    <div className=' '>
                        <img src={Ellipse}></img>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2 w-[40px] h-[40px] cursor-pointer'>
                    <img src={Company}></img>
                    <img src={Arrow}></img>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header