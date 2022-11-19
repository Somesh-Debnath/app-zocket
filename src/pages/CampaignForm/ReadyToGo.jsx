import React from 'react'
import CakeShopReview from '../../components/CakeShopReview'

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import cake1 from '../../image/cake1.png'
import cake2 from '../../image/cake2.png'
import cake3 from '../../image/cake3.png'
import cake4 from '../../image/cake4.png'


function ReadyToGo({step,nextStep,prevStep}) {
  return (
    <div className="flex relative flex-col ">
          <Navbar/>   
        <Sidebar/>

        <div className='absolute top-[5.2rem] left-[7.25rem]' >
          <h1 className="font-bold text-2xl font-Eudoxus my-[-3px]">Your Ad Campaign</h1>
          <span className='text-sm font-Eudoxus text-gray-500'>
            Launch your ad in just 4 easy steps</span>
        </div>

       <div className='flex flex-col relative ml-28 mt-40 max-w-[72rem] 
      my-5 p-6 rounded-xl border-[0.3px] border-blue-200'>

       <div className='flex space-x-2 my-3 ml-2' >
          <h1 className="font-bold text-lg font-Eudoxus my-[-3px]">Ready to go</h1>
          <span className='text-sm font-Eudoxus text-gray-500 mt-[2px]'>
           (Step 4 of 4)</span>
        </div>
      <div className='flex flex-wrap mt-3'>
           <CakeShopReview img={cake1}/>
           <CakeShopReview img={cake2}/>
            <CakeShopReview img={cake3}/>
           <CakeShopReview img={cake4}/>
      </div>
       </div>

       <div className='flex justify-end mx-20 mt-10 mb-32'>
        <button onClick={prevStep}
        className='bg-[#0F6EFF] font-medium flex text-lg
        px-24 py-3 rounded-xl text-white font-Eudoxus'>
          Start Campaign</button>
      </div>
        


    </div>
  )
}

export default ReadyToGo