import React from 'react'
import Toggle from './Toggle'
import Youtube from '../image/Youtube.png'
import Google from '../image/Google.png'
import FB from '../image/FB.png'

function CampaignCard({image,createdAt,campaignName, date, budget, location, platform,}) {
const dat=new Date(date)
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "Nov", "Dec"
];
  return (

<div className='ml-8 flex flex-col py-4'>
  <div className='flex py-4 flex-wrap'>

    <div className='flex'>
      <div className='mr-5 mt-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="#B3B3B3"/>
</svg>
</div>
      <div className='mr-7 mt-1'>
        <Toggle/>
      </div>
    </div>

      <div className='flex w-[25%]'>
          <div className='mr-4'>
            <img src={image} alt='campaign' className='w-10 h-10'/>
          </div>
          <div className=' font-Eudoxus '>
            <div className='text-gray-800 font-semibold text-sm'>
              {campaignName}</div>
            <span className='text-sm'>createdAt</span>
          </div>
      </div>
      <div className='w-[18%]'>
        <div className='text-sm '>{` ${dat.getDate()} ${monthNames[dat.getMonth()]} ${dat.getFullYear()} -
        ${dat.getDate()} ${monthNames[dat.getMonth()]} ${dat.getFullYear()} `}
        </div>
       </div>
       <div className='ml-3'>
         <div className='mr-10'>clicks</div>
       </div>
      <div className='mr-5'>
        <div className='mr-5'>{budget}</div>
      </div>
      <div className='w-[8%] mr-6'>
      <div >{location}</div>
      </div>
      <div className='w-[5%] text-center'>
      <div >
        {platform==='Google' ? <img src={Google} alt='Google' className='w-6 h-6'/> 
        : platform==='Youtube' ? <img src={Youtube} alt='Youtube' className='w-6 h-6'/> 
        : <img src={FB} alt='FB' className='w-6 h-6'/>}
        </div>
      </div>
      <div className='w-[6%] mr-5'>
        <button className='bg-[#E1FFE0] cursor-default 
        text-xs py-2 px-[8px]
        rounded-xl text-[#317C2E]'>Live Now</button>
     
      </div>
      <div className='flex space-x-2'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6026 3.15007L4.4188 10.7538C4.14755 11.0426 3.88505 11.6113 3.83255 12.0051L3.5088 14.8401C3.39505 15.8638 4.13005 16.5638 5.14505 16.3888L7.96255 15.9076C8.3563 15.8376 8.90755 15.5488 9.1788 15.2513L16.3626 7.64757C17.6051 6.33507 18.1651 4.83882 16.2313 3.01007C14.3063 1.19882 12.8451 1.83757 11.6026 3.15007Z" stroke="#0F6EFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.4038 4.4187C10.7801 6.8337 12.7401 8.67995 15.1726 8.92495" stroke="#0F6EFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.625 19.25H18.375" stroke="#0F6EFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.375 5.23242C15.4613 4.94367 12.53 4.79492 9.6075 4.79492C7.875 4.79492 6.1425 4.88242 4.41 5.05742L2.625 5.23242" stroke="#FC3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.4375 4.34875L7.63 3.2025C7.77 2.37125 7.875 1.75 9.35375 1.75H11.6463C13.125 1.75 13.2387 2.40625 13.37 3.21125L13.5625 4.34875" stroke="#FC3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4937 7.99756L15.925 16.8088C15.8287 18.1826 15.75 19.2501 13.3087 19.2501H7.69122C5.24998 19.2501 5.17123 18.1826 5.07498 16.8088L4.50623 7.99756" stroke="#FC3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.0387 14.4375H11.9524" stroke="#FC3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.3125 10.9375H12.6875" stroke="#FC3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
      </div>
      </div>
      <svg className='w-full mt-5'
      width="1169" height="2" viewBox="0 0 1169 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L1168 1.0001" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      
    </div>
  )
}

export default CampaignCard