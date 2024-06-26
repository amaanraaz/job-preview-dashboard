import React from 'react'

const Title = () => {
  return (
    <div className='w-[1728px] h-[67px] mt-10 border-y border-slate-300 flex items-center'>
      <div className='w-[590px] h-[27px] ml-[100px] flex justify-between items-center align-middle'>
        <h1 className='font-[600] font-sans text-[20px] text-red'>Job preview</h1>
        <h1 className='font-[500] font-sans text-gray text-[20px]'>Applicants</h1>
        <h1 className='font-[500] font-sans text-gray text-[20px]'>Match</h1>
        <h1 className='font-[500] font-sans text-gray text-[20px]'>Messages</h1>

      </div>
    </div>  
  )
}

export default Title