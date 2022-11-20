import React, { useContext } from 'react'
import CampaignTypes from '../../components/CampaignTypes';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { CampaignContext } from '../../Contexts/CampaignContext';
import { campaignTypesData } from '../../data/CampaignTypesData';

function CreateCampaigns() { 
  const {step,setStep}=useContext(CampaignContext)
  return (
    <div className="flex relative flex-col ">
          <Navbar/>   
        <Sidebar/>

        <div className='absolute top-[5.2rem] left-[7.25rem]' >
          <h1 className="font-bold text-2xl font-Eudoxus my-[-3px]">Your Ad Campaign</h1>
          <span className='text-sm font-Eudoxus text-gray-500'>
            Launch your ad in just 4 easy steps</span>
        </div>

   
       <div className='flex flex-col relative ml-24 mt-36 max-w-[76rem] 
      my-5 p-6 rounded-xl border-[0.3px] border-blue-200'>

       <div className='flex space-x-2 mt-3 ml-2' >
          <h1 className="font-bold text-lg font-Eudoxus my-[-3px]">What do you want to do?</h1>
          <span className='text-sm font-Eudoxus text-gray-500 mt-[2px]'>
           (Step {step} of 4)</span>
        </div>
      <div className='flex flex-wrap mt-6'>
           {campaignTypesData.map((item,id)=>(
            <CampaignTypes key={id} 
            Platform={item.Platform} 
            title={item.title}
            description={item.description}
            icon={item.icon}/>
           ))}

      </div>
       </div>

       <div onClick={()=>setStep(step+1)}
       className='flex justify-end mx-20 mt-10 mb-32'>
        <button className='bg-[#0F6EFF] font-medium flex text-lg
        px-24 py-3 rounded-xl text-white font-Eudoxus'>
          Continue</button>
      </div>
        
    </div>
  )
}

export default CreateCampaigns