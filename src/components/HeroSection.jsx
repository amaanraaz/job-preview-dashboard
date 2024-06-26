import React from 'react'
import {Marker,Stack,Adobe,Ai,Figma, Atlassian} from '../assets'

const HeroSection = () => {
  return (
    <div className='w-[1319px]'>

      {/* Title of Job Section */}
      <div className='w-[623px] h-[98px] mt-[36px] ml-[100px] gap-[24px]'>
        <div className='h-[47px] gap-[10px] flex items-center align-middle '>
          <h1 className='font-sans font-[600] text-[35px] text-darkgray'>Senior Product Designer</h1>
          <div className='h-[4px] w-[4px] bg-circlegray rounded-full'></div>
          <div className='w-[117px] h-[19px]'>
            <h1 className='font-sans font-[500] text-[14px] text-gray'>posted 2 days ago</h1>
          </div>
          <div className='w-[57px] h-[22px] rounded-full border border-lightgreen flex justify-between items-center px-2 bg-lightergreen'>
            <div className='w-[8px] h-[8px] bg-darkgreen rounded-full '></div>
            <div>
              <h1 className='font-sans font-[500] text-[12px] text-darkergreen'>Open</h1>
            </div>
          </div>
        </div>
        <div className='w-[363px] h-[27px] gap-[16px] flex justify-between items-center mt-4'>
          <div className='w-[168px] h-[27px] flex items-center align-middle justify-between'>
            <img src={Marker} alt='marker logo'></img>
            <div className='w-[136px] h-[27px]'>
              <h1 className='font-sans font-[500] text-[19px] text-darkergray'>Delaware, USA</h1>
            </div>
          </div>
          <div className='h-[4px] w-[4px] bg-circlegray rounded-full'></div>
            <div className='h-[27px] w-[159px] gap-[12px] flex items-center'>
              <img src={Stack} alt='stack logo'></img>
              <h1 className='font-sans text-darkgray text-[20px] font-[500]'>$300k-$400k</h1>

            </div>
        </div>
      </div>

      {/* Line break line */}
      <div className='w-[1319px] h-[1px] my-5 bg-linegray'></div>

      {/* Skill required section menu */}
      <div className='w-[872px] h-[115px] ml-[100px] flex justify-between'>
        <div className='w-[170px]'>
          <div className='w-[96px] h-[19px]'>
            <h1 className='font-sans font-[500] text-[14px] text-textgray'>Skills Reqired</h1>
          </div>
          <div className='w-[126.41px] h-[88px] gap-[8px] mt-2'>
            <div className='w-[66px] h-[24px] border border-circlegray rounded-md py-[4px] px-[6px] flex justify-between items-center my-2'>
              <img src={Figma} alt="figma"></img>
              <h1 className='font-sans font-[500] text-[12px] text-textblack'>Figma</h1>
            </div>
            <div className='w-[126.41px] h-[24px] border border-circlegray rounded-md py-[4px] px-[6px] flex justify-between items-center my-2'>
              <img src={Ai} alt="Ai"></img>
              <h1 className='font-sans font-[500] text-[12px] text-textblack'>Adobe Illustrator</h1>
            </div>
            <div className='w-[88.41px] h-[24px] border border-circlegray rounded-md py-[4px] px-[6px] flex justify-between items-center my-2'>
              <img src={Adobe} alt="Adobe"></img>
              <h1 className='font-sans font-[500] text-[12px] text-textblack'>Adobe XD</h1>
            </div>
          </div>

        </div>
        <div className='w-[170px]'>
          <div className='w-[96px] h-[19px]'>
              <h1 className='font-sans font-[500] text-[14px] text-textgray whitespace-nowrap'>Preffered Language</h1>
          </div>
          <div>
            <h1 className='font-sans font-[600] text-[16px] text-darkgray'>English</h1>
          </div>
        </div>
        <div className='w-[170px]'>
          <div className='w-[96px] h-[19px]'>
              <h1 className='font-sans font-[500] text-[14px] text-textgray'>Type</h1>
          </div>
          <div>
            <h1 className='font-sans font-[600] text-[16px] text-darkgray'>Full Time</h1>
          </div>
        </div>
        <div className='w-[170px]'>
          <div className='w-[96px] h-[19px]'>
              <h1 className='font-sans font-[500] text-[14px] text-textgray whitespace-nowrap'>Years of Experience</h1>
          </div>
          <div>
            <h1 className='font-sans font-[600] text-[16px] text-darkgray whitespace-nowrap '>3+ Years of Experience</h1>
          </div>
        </div>
      </div>

      {/* Line break line */}
      <div className='w-[1319px] h-[1px] my-5 bg-linegray'></div>

      {/* About the job points */}
      <div className='w-[526px] h-[401px] ml-[100px] flex flex-col items-start'>
        <h1 className='font-sans font-[500] text-[14px] text-textgray'>About the job</h1>
        <div className='w-[526px] h-[374px] font-sans font-[530] text-[16px] text-darkgray my-2'>
          <ol className='list-decimal ml-4'>
            <li>Handle the UI/UX research design</li>
            <li>Work on researching on latest web applications designs & trends</li>
            <li>Work on conceptualizing and visualizing</li>
            <li>Work on creating graphics content and other graphic related works</li>
          </ol>

          <div>
            <h2>Benefits:</h2>
            <ul className='list-disc ml-6'>
              <li>Health insurance</li>
              <li>Provident Fund</li>
            </ul>
          </div>

          <div>
            <h2>Schedule:</h2>
            <ul className='list-disc ml-6'>
              <li>Day shift</li>
            </ul>
          </div>

          <div>
            <h2>Supplemental pay types:</h2>
            <ul className='list-disc ml-6'>
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
          </div>

          <div className='flex items-center'>
            <h2>Work Location:</h2>
            <p>In person</p>
          </div>
        </div>

      </div>

      {/* Line break line */}
      <div className='w-[1319px] h-[1px] my-5 bg-linegray'></div>

      {/* Footer for company details */}

      <div className='w-[736px] h-[271px] ml-[100px]'>
        <div className='w-[138px] h-[40px] flex justify-between items-center'>
          <img src={Atlassian} alt='company logo'></img>
          <h1 className='font-sans font-[500] text-[20px] text-lightgray'>Atlassian</h1>
        </div>
        <div className='w-[736px] h-[195px] mt-[16px] grid grid-cols-2 '>
          <div class="w-[344px] h-[49px]">
            <div>
              <h1 className='font-sans font-[500] text-[14px] text-textgray'>Company size</h1>
              <h1 className='font-sans text-[16px] font-[500] text-darkgray'>1k - 2k Employees</h1>
            </div>
          </div>
          <div class="w-[344px] h-[49px]">
            <div>
              <h1 className='font-sans font-[500] text-[14px] text-textgray'>Type</h1>
              <h1 className='font-sans text-[16px] font-[500] text-darkgray'>Private</h1>
            </div>
          </div>
          <div class="w-[344px] h-[49px]">
            <div>
              <h1 className='font-sans font-[500] text-[14px] text-textgray'>Sector</h1>
              <h1 className='font-sans text-[16px] font-[500] text-darkgray'>Information Technology, Infrastructure</h1>
            </div>
          </div>
          <div class="w-[344px] h-[49px]">
            <div>
              <h1 className='font-sans font-[500] text-[14px] text-textgray'>Funding</h1>
              <h1 className='font-sans text-[16px] font-[500] text-darkgray'>Bootstraped</h1>
            </div>
          </div>
          <div class="w-[344px] h-[49px]">
            <div>
              <h1 className='font-sans font-[500] text-[14px] text-textgray'>Founded In</h1>
              <h1 className='font-sans text-[16px] font-[500] text-darkgray'>2019</h1>
            </div>
          </div>
          <div class="w-[344px] h-[49px]">
            <div>
              <h1 className='font-sans font-[500] text-[14px] text-textgray'>Founded By</h1>
              <h1 className='font-sans text-[16px] font-[500] text-darkgray'>Scott Farquhar, Mike Cannon-Brookes </h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection