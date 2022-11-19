import React from 'react'
import CampaignTypes from '../../components/CampaignTypes';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
//import {useNavigate} from 'react-router-dom'
import { campaignTypesData } from '../../data/CampaignTypesData';

function CreateCampaigns({step,nextStep,prevStep,
  handleChange,values,parentCallback}) {
  
  const [platform, setPlatform] = React.useState("");
  const handleCallback = (childData) => {
    setPlatform(childData);
  }
 
  handleChange({platform})
  values.platform=platform
  
   const continu=(e)=>{
        e.preventDefault();
        nextStep();
    }

  return (
    <div className="flex relative flex-col ">
          <Navbar/>   
        <Sidebar/>

        <div className='absolute top-[5.2rem] left-[7.25rem]' >
          <h1 className="font-bold text-2xl font-Eudoxus my-[-3px]">Your Ad Campaign</h1>
          <span className='text-sm font-Eudoxus text-gray-500'>
            Launch your ad in just 4 easy steps</span>
        </div>

      {/* <div className='flex'>
          <div className='mt-[102px] mb-[-4rem] ml-40 relative'>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8033 25.6666C17.7333 25.6666 17.6517 25.655 17.5817 25.6316C15.2367 24.9666 12.775 24.9666 10.43 25.6316C9.99833 25.7483 9.54333 25.5033 9.42667 25.0716C9.29833 24.64 9.555 24.185 9.98667 24.0683C12.6233 23.3216 15.4 23.3216 18.0367 24.0683C18.4683 24.1966 18.725 24.64 18.5967 25.0716C18.48 25.4333 18.1533 25.6666 17.8033 25.6666Z" fill="white"/>
              <path d="M22.4117 7.41977C21.1983 4.96977 18.8533 3.16144 16.135 2.56644C13.2883 1.93644 10.3717 2.6131 8.14333 4.40977C5.90333 6.19477 4.63167 8.86643 4.63167 11.7248C4.63167 14.7464 6.44 17.9081 9.17 19.7398V20.7081C9.15833 21.0348 9.14667 21.5364 9.54333 21.9448C9.95167 22.3648 10.5583 22.4114 11.0367 22.4114H17.0217C17.6517 22.4114 18.13 22.2364 18.4567 21.9098C18.9 21.4548 18.8883 20.8714 18.8767 20.5564V19.7398C22.4933 17.3014 24.7683 12.1564 22.4117 7.41977ZM16.0067 13.5564L14.7583 15.7264C14.595 16.0064 14.3033 16.1698 14 16.1698C13.8483 16.1698 13.6967 16.1348 13.5683 16.0531C13.1483 15.8081 13.0083 15.2714 13.2417 14.8631L14.2333 13.1364H13.2533C12.67 13.1364 12.1917 12.8798 11.935 12.4481C11.6783 12.0048 11.7017 11.4681 11.9933 10.9548L13.2417 8.78477C13.4867 8.36477 14.0233 8.22477 14.4317 8.4581C14.8517 8.7031 14.9917 9.23977 14.7583 9.6481L13.7667 11.3748H14.7467C15.33 11.3748 15.8083 11.6314 16.065 12.0631C16.3217 12.5064 16.2983 13.0548 16.0067 13.5564Z" fill="white"/>
              </svg>
              <div className='absolute top-[-4px] left-[-6px] -z-30'>
                  <div className='bg-[#F29A2E] rounded-full w-10 h-10 flex items-center justify-center'>
                    <span className='text-blue-500 font-bold'></span>
                  </div>
                </div>
          </div>

           <div className='mt-[114px] mb-[-4rem] -z-50 absolute'>
              <svg 
              width="1108" height="4" viewBox="0 0 1108 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.86377L1108 1.86367" stroke="#E7EAF0" stroke-width="3"/>
              </svg>
            </div>

            <div className='mt-[102px] mb-[-4rem] ml-40 relative'>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4467 6.50991H21.98L18.0367 2.56657C17.7217 2.25157 17.2083 2.25157 16.8817 2.56657C16.5667 2.88157 16.5667 3.39491 16.8817 3.72157L19.67 6.50991H8.33001L11.1183 3.72157C11.4333 3.40657 11.4333 2.89324 11.1183 2.56657C10.8033 2.25157 10.29 2.25157 9.96334 2.56657L6.03168 6.50991H5.56501C4.51501 6.50991 2.33334 6.50991 2.33334 9.49657C2.33334 10.6282 2.56668 11.3749 3.05668 11.8649C3.33668 12.1566 3.67501 12.3082 4.03668 12.3899C4.37501 12.4716 4.73668 12.4832 5.08668 12.4832H22.9133C23.275 12.4832 23.6133 12.4599 23.94 12.3899C24.92 12.1566 25.6667 11.4566 25.6667 9.49657C25.6667 6.50991 23.485 6.50991 22.4467 6.50991Z" fill="#ABB5C2"/>
              <path d="M22.225 14H5.68165C4.95832 14 4.40999 14.6417 4.52665 15.3533L5.50665 21.35C5.83332 23.3567 6.70832 25.6667 10.5933 25.6667H17.1383C21.07 25.6667 21.77 23.695 22.19 21.49L23.3683 15.3883C23.5083 14.665 22.96 14 22.225 14ZM12.3783 21.525C12.3783 21.98 12.0167 22.3417 11.5733 22.3417C11.1183 22.3417 10.7567 21.98 10.7567 21.525V17.675C10.7567 17.2317 11.1183 16.8583 11.5733 16.8583C12.0167 16.8583 12.3783 17.2317 12.3783 17.675V21.525ZM17.3717 21.525C17.3717 21.98 17.01 22.3417 16.555 22.3417C16.1117 22.3417 15.7383 21.98 15.7383 21.525V17.675C15.7383 17.2317 16.1117 16.8583 16.555 16.8583C17.01 16.8583 17.3717 17.2317 17.3717 17.675V21.525Z" fill="#ABB5C2"/>
              </svg>

              <div className='absolute top-[-4px] left-[-6px] -z-30'>
                  <div className='bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center'>
                    <span className='text-blue-500 font-bold'></span>
                  </div>
                </div>
          </div>
           <div className='mt-[102px] mb-[-4rem] ml-40 relative'>
           <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9579 2.98626H19.0634C20.2262 2.98626 21.1689 3.92892 21.1689 5.09174V19.1283C21.1689 20.2911 20.2262 21.2338 19.0634 21.2338H2.21956C1.05673 21.2338 0.114075 20.2911 0.114075 19.1283V5.09174C0.114075 3.92892 1.05673 2.98626 2.21955 2.98626H4.32503V0.178955H5.72869V2.98626H15.5543V0.178955H16.9579V2.98626ZM8.53599 11.4082H4.32503V10.0045H8.53599V11.4082ZM16.9579 10.0045H12.747V11.4082H16.9579V10.0045ZM8.53599 15.6191H4.32503V14.2155H8.53599V15.6191ZM12.747 15.6191H16.9579V14.2155H12.747V15.6191Z" fill="#ABB5C2"/>
            </svg>

              <div className='absolute top-[-4px] left-[-6px] -z-30'>
                  <div className='bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center'>
                    <span className='text-blue-500 font-bold'></span>
                  </div>
                </div>
          </div>
          <div className='mt-[102px] mb-[-4rem] ml-40 relative'>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8033 25.6666C17.7333 25.6666 17.6517 25.655 17.5817 25.6316C15.2367 24.9666 12.775 24.9666 10.43 25.6316C9.99833 25.7483 9.54333 25.5033 9.42667 25.0716C9.29833 24.64 9.555 24.185 9.98667 24.0683C12.6233 23.3216 15.4 23.3216 18.0367 24.0683C18.4683 24.1966 18.725 24.64 18.5967 25.0716C18.48 25.4333 18.1533 25.6666 17.8033 25.6666Z" fill="white"/>
              <path d="M22.4117 7.41977C21.1983 4.96977 18.8533 3.16144 16.135 2.56644C13.2883 1.93644 10.3717 2.6131 8.14333 4.40977C5.90333 6.19477 4.63167 8.86643 4.63167 11.7248C4.63167 14.7464 6.44 17.9081 9.17 19.7398V20.7081C9.15833 21.0348 9.14667 21.5364 9.54333 21.9448C9.95167 22.3648 10.5583 22.4114 11.0367 22.4114H17.0217C17.6517 22.4114 18.13 22.2364 18.4567 21.9098C18.9 21.4548 18.8883 20.8714 18.8767 20.5564V19.7398C22.4933 17.3014 24.7683 12.1564 22.4117 7.41977ZM16.0067 13.5564L14.7583 15.7264C14.595 16.0064 14.3033 16.1698 14 16.1698C13.8483 16.1698 13.6967 16.1348 13.5683 16.0531C13.1483 15.8081 13.0083 15.2714 13.2417 14.8631L14.2333 13.1364H13.2533C12.67 13.1364 12.1917 12.8798 11.935 12.4481C11.6783 12.0048 11.7017 11.4681 11.9933 10.9548L13.2417 8.78477C13.4867 8.36477 14.0233 8.22477 14.4317 8.4581C14.8517 8.7031 14.9917 9.23977 14.7583 9.6481L13.7667 11.3748H14.7467C15.33 11.3748 15.8083 11.6314 16.065 12.0631C16.3217 12.5064 16.2983 13.0548 16.0067 13.5564Z" fill="white"/>
              </svg>
              <div className='absolute top-[-4px] left-[-6px] -z-30'>
                  <div className='bg-[#F29A2E] rounded-full w-10 h-10 flex items-center justify-center'>
                    <span className='text-blue-500 font-bold'></span>
                  </div>
                </div>
          </div>
      </div> */}

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
            parentCallback={handleCallback}
            Platform={item.Platform} 
            title={item.title}
            description={item.description}
            icon={item.icon}/>
           ))}

      </div>
       </div>

       <div onClick={continu}
       className='flex justify-end mx-20 mt-10 mb-32'>
        <button className='bg-[#0F6EFF] font-medium flex text-lg
        px-24 py-3 rounded-xl text-white font-Eudoxus'>
          Continue</button>
      </div>
        


    </div>
  )
}

export default CreateCampaigns