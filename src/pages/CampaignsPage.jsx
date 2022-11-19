import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import CreateCampaign from './CampaignForm/CreateCampaign'
import ReadyToGo from './CampaignForm/ReadyToGo'
import CampaignSettings from './CampaignForm/CampaignSettings'
import ChooseProducts from './CampaignForm/ChooseProduct'
import CampaignCard from '../components/CampaignCard'

function CampaignsPage() {
  const [step, setStep] = React.useState(0);
  const [image, setImage] = React.useState(null);
  const [campaignName, setCampaignName] = React.useState("");
  const [date, setDate] = React.useState([]);
  const [budget, setBudget] = React.useState();
  const [location, setLocation] = React.useState("");
  const [platform, setPlatform] = React.useState();

  const [campaigns, setCampaigns] = React.useState([])

const handleChange=input=>e=>{
  if(input==="campaignName"){
    setCampaignName(e.target.value)
  }
  if(input==="location"){
    setLocation(e.target.value)
  }
  if(input==="platform"){
    setPlatform(e.target.value)
  }
  if(input==="budget"){
    setBudget(e.target.value)
  }
}

console.log(campaignName)
console.log(location)
  
const values={campaignName,date,budget,location,platform}

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 4);
  };

  useEffect(() => {
    fetch('http://localhost:8000/getCampaigns')
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data.campaigns)
      })
  }, [])
console.log(campaigns)
  switch (step) {
    case 0:
      return (
        <div className="flex relative flex-col ">
              <Navbar/>   
            <Sidebar/>
    
            <div className='absolute top-[5.2rem] left-[7.25rem]' >
              <h1 className="font-bold text-2xl font-Eudoxus my-[-3px]">Your Campaigns</h1>
              <span className='text-sm font-Eudoxus text-gray-500'>Check the list of campaigns you created</span>
            </div>
          <div className='flex justify-end mx-14 mt-14'>
            <button onClick={nextStep}
             className='bg-[#0F6EFF] font-medium flex 
            px-5 py-3 rounded-xl text-white font-Eudoxus'>
             <svg className="mx-2 mt-[1.4px]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 10.5H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 14V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              Create New Campaign</button>
          </div>
    
          <div className='relative ml-28 max-w-6xl p-5 rounded-xl mt-12 border-[0.3px] border-blue-200'>
          <div className='flex justify-between mb-6'>
            <div>
            <svg className='absolute top-10 left-11'
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type='text' placeholder='Search for the Campaign'
                 name='search' className='px-12 py-4 border-2 rounded-lg ml-3'/>
            </div>

            <div className='flex font-Eudoxus space-x-8'>
                <div className='flex mx-2'>
                <span className='mt-4 mr-1 text-gray-500'>Platform:</span>
                <div className='flex space-x-1 border-[1px] rounded-xl font-medium pt-4 px-3'>
                    <span>All Platform </span>
                    <svg className='ml-2 mt-2'
                    width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.89459 1.19691C8.03608 0.949309 8.03507 0.64511 7.89193 0.398459C7.74879 0.151807 7.48518 -2.25037e-08 7.2 -3.49691e-08L0.8 -3.14722e-07C0.514824 -3.27187e-07 0.251209 0.151806 0.108072 0.398458C-0.0350657 0.64511 -0.0360823 0.949308 0.105405 1.19691L3.3054 6.79691C3.44784 7.04617 3.71291 7.2 4 7.2C4.28708 7.2 4.55216 7.04617 4.69459 6.79691L7.89459 1.19691Z" fill="black"/>
                            </svg>
                </div>
                </div>

                <div className=' flex mx-2'>
                <span className='mt-4 mr-1 text-gray-500'>Status:</span>
                <div className='flex border-[1px] rounded-xl font-medium
                 pt-4 px-3'>
                    <span>All Status</span>
                    <svg 
                    className='ml-2 mt-2'
                    width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.89459 1.19691C8.03608 0.949309 8.03507 0.64511 7.89193 0.398459C7.74879 0.151807 7.48518 -2.25037e-08 7.2 -3.49691e-08L0.8 -3.14722e-07C0.514824 -3.27187e-07 0.251209 0.151806 0.108072 0.398458C-0.0350657 0.64511 -0.0360823 0.949308 0.105405 1.19691L3.3054 6.79691C3.44784 7.04617 3.71291 7.2 4 7.2C4.28708 7.2 4.55216 7.04617 4.69459 6.79691L7.89459 1.19691Z" fill="black"/>
                            </svg>
                </div>
                </div>

                 <div className='flex border-[1px] rounded-xl font-medium pt-4 px-3'>
                  <span > Last 30 Days</span>
                    <svg className='ml-2 mt-2' 
                    width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.89459 1.19691C8.03608 0.949309 8.03507 0.64511 7.89193 0.398459C7.74879 0.151807 7.48518 -2.25037e-08 7.2 -3.49691e-08L0.8 -3.14722e-07C0.514824 -3.27187e-07 0.251209 0.151806 0.108072 0.398458C-0.0350657 0.64511 -0.0360823 0.949308 0.105405 1.19691L3.3054 6.79691C3.44784 7.04617 3.71291 7.2 4 7.2C4.28708 7.2 4.55216 7.04617 4.69459 6.79691L7.89459 1.19691Z" fill="black"/>
                            </svg>
                </div>
         </div>

        </div>

        <div className='flex bg-[#F8F8F8] border-[1px] pr-2 pl-5 py-4 
         text-gray-500 border-gray-300 ml-3 
         rounded-2xl justify-start'>
                   
          <div className='mr-4 mt-1'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="#B3B3B3"/>
</svg>
</div>
          <div className='mr-10'>On/Off</div>
          <div className='mr-52'>Campaign</div>
          <div className='mr-[117px]'>Date Range</div>
          <div className='mr-9'>Clicks</div>
          <div className='mr-7'>Budget</div>
          <div className='mr-5'>Location</div>
          <div className='mr-8'>Platform</div>
          <div className='mr-8'>Status</div>
          <div>Actions</div>
        </div>

        <div>
          {campaigns.map((campaign) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array
                (campaign.image.data.data))
            );
           return <CampaignCard key={campaign.id} 
           image={`data:image/png;base64,${base64String}`}
            budget={campaign.budget}
            location={campaign.location}
            date={campaign.date}
            platform={campaign.platform}
            //clicks={clicks}
            campaignName={campaign.campaignName}
             />
              })}
        </div>

          </div>
        </div>
      )
    case 1:
      return (
        <CreateCampaign 
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={values}
        />
      )
    case 2:
      return (
        <ChooseProducts
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={values}        
        />
      )
    case 3:
      return (
        <CampaignSettings
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        
        />
      )
    case 4:
      return (
        <ReadyToGo
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        
        />
      )  
      default:   
          console.log('This is a multi-step form built with React.')
   }
}

export default CampaignsPage