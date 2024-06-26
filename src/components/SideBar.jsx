import React from 'react'
import {Trash,Edit,Usercheck,Users,Icon2,Eye} from '../assets'

const datas = [
    {
        id:1,
        icon: Users,
        name: "Applicants",
        count: 400
    },
    {
        id:2,
        icon: Usercheck,
        name: "Matches",
        count: 100
    },
    {
        id:3,
        icon: Icon2,
        name: "Messages",
        count: 147
    },
    {
        id:4,
        icon: Eye,
        name: "Views",
        count: 800
    }
]

const SideBar = () => {
  return (
    <div className='border-l border-slate-300 px-4 py-5 w-[409px]'>
        <div className='w-[360px] h-[46px] flex justify-between'>
            <div className='flex justify-between'>
                <div className='w-[172px] py-[12px] px-[24px] border border-red rounded-[8px] bg-light-red flex items-center gap-2 font-sans font-[500] text-[16px] text-red cursor-pointer align-middle justify-center'>
                    <img src={Trash} alt='trash-img'></img>
                    <h1>Delete job</h1>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='w-[172px] py-[12px] px-[24px] border-2 border-light-red rounded-[8px] bg-red flex items-center gap-2 font-sans font-[500] text-[16px] text-pale cursor-pointer align-middle justify-center'>
                    <img src={Edit} alt='edit-img'></img>
                    <h1>Edit Job</h1>
                </div>
            </div>
        </div>
        <div className='mt-1 h-[291px] w-[360px]'>
            {
                datas.map((data)=>(
                    <div className='p-[12px] gap-[16px]'>
                        <div key={data.id} className='flex justify-between items-center w-[336px] h-[42px] p-[10px] '>
                            <div className='flex justify-between items-center p-[10px] gap-3'>
                                <img src={data.icon} alt='icon'></img>
                                <h1 className='font-sans font-[500] text-[16px] text-lightgray'>{data.name}</h1>
                            </div>
                            <h1 className='font-sans font-[600] text-[20px] text-darkgray'>{data.count}</h1>
                        </div>
                        <div className={data.id!==datas.length?`w-[336px] h-[1px] border border-linegray mt-[16px]`:''}></div>
                    </div>
                    
                ))
            }   
        </div>
    </div>
  )
}

export default SideBar