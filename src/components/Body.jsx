import React from 'react'
import HeroSection from './HeroSection'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='w-[1728px] h-[1152px] flex'>
      <HeroSection/>
      <SideBar/>
    </div>
  )
}

export default Body