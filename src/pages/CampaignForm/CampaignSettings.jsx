import React from 'react'
import { CampaignContext } from '../../Contexts/CampaignContext';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ToggleBlue from '../../components/ToggleBlue';
import Slider from '@mui/material/Slider';

function CampaignSettings() {
  const [toggled, setToggled] = React.useState(false);
  
  const {step,setStep,startdate,setstartDate,enddate,
    setendDate,location,setLocation,platform}=React.useContext(CampaignContext)

    const handleClick = () => {
        setToggled((s) => !s);
    };
    console.log(location,platform)

    const marks = [
      {
        value: 100,
        label: "100"
      },
    
      {
        value: 100000,
        label: "100000"
      }
    ];
    const marks2 = [
      {
        value: 1,
        label: "1"
      },
    
      {
        value: 30,
        label: "30"
      }
    ];
    
    function valuetext(value) {
      return `${value}km`;
    }

  return (
    <div className="flex relative flex-col  ">
          <Navbar/>   
        <Sidebar/>

        <div className='absolute top-[5.2rem] left-[7.25rem]' >
          <h1 className="font-bold text-2xl font-Eudoxus my-[-3px]">Your Ad Campaign</h1>
          <span className='text-sm font-Eudoxus text-gray-500'>
            Launch your ad in just 4 easy steps</span>
        </div >

      <div className='flex flex-col relative ml-28 mt-36 max-w-[50rem] 
      my-5 p-7 rounded-lg border-[0.3px] border-blue-200'>

         <div className='flex flex-col space-y-3 mb-10 w-4/5'>
            <div className='flex space-x-2 ml-1' >
              <h1 className="font-bold text-lg font-Eudoxus my-[-3px]">
              Campaign Settings</h1>
              <span className='text-sm font-Eudoxus text-gray-500 mt-[2px]'>
              (Step {step} of 4)</span>
            </div>
            <svg width="799" height="2" viewBox="0 0 799 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H798" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
          
        <div>
          <div className='flex space-x-2'>
              <svg className='mt-[-4px]'
              width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="17" r="11" fill="#0F6EFF" stroke="#FDFDFF" stroke-width="2"/>
              <path d="M10.076 13.452H8.348V12.06H11.708V21H10.076V13.452Z" fill="white"/>
              </svg>
                <h2 className='font-semibold underline text-gray-700 '>
                  Budget and Dates info</h2>
          </div>
        
        
      <div className='flex flex-col ml-10 mt-4'>
          <div className='flex flex-col space-y-5'>
            <h2>Budget Timeline</h2>
            <button>
              <div className='flex space-x-2 border-[1px] border-gray-200
              w-[29%] rounded-full '>
                
                <h2 className=' bg-[#0F6EFF] w-[60%] 
                border-[1px] border-gray-200 rounded-full text-white text-center py-2
                 mr-3'>Lifetime</h2>
                <h2 className='font-semibold mt-2 text-gray-500 '>Daily</h2>
              </div>

            </button>
            
          </div>

        <div className='flex mt-4 mb-[-14px] text-[#606060]'>
          <div className='block w-1/2'>Start Date</div>
          <div className='ml-[-14px]'>End Date</div>
        </div>

        <div className='flex mt-5 space-x-3 w-[90%]'>
                 <input 
                  className='bg-white p-4 w-1/2
                  border-[1px] rounded-lg border-gray-400'
                  type='date' onChange={e=>setstartDate(e.target.value)}
                  />                  
                  <input 
                  className='bg-white w-1/2 p-4
                  border-[1px] rounded-lg border-gray-400'
                  type='date' onChange={e=>setendDate(e.target.value)}
                  />
                
        </div>

      
        <div className='flex justify-between w-[92%] text-[#606060] mt-8'>
            <div>Campaign Budget</div>
            <div className='flex space-x-2'>
            <svg className='mt-1'
            width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_250_1746)">
              <path d="M0 0H24V6H0V0Z" fill="#FF8718"/>
              <path d="M0 6H24V12H0V6Z" fill="#F5F8FB"/>
              <path d="M0 12H24V18H0V12Z" fill="#2B9F5A"/>
              <path d="M13.5 9C13.5 9.82843 12.8284 10.5 12 10.5C11.1716 10.5 10.5 9.82843 10.5 9C10.5 8.17157 11.1716 7.5 12 7.5C12.8284 7.5 13.5 8.17157 13.5 9Z" fill="#F5F8FB"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C11.5858 8.25 11.25 8.58579 11.25 9C11.25 9.41421 11.5858 9.75 12 9.75C12.4142 9.75 12.75 9.41421 12.75 9C12.75 8.58579 12.4142 8.25 12 8.25ZM9.75 9C9.75 7.75736 10.7574 6.75 12 6.75C13.2426 6.75 14.25 7.75736 14.25 9C14.25 10.2426 13.2426 11.25 12 11.25C10.7574 11.25 9.75 10.2426 9.75 9Z" fill="#41479B"/>
              </g>
              <defs>
              <clipPath id="clip0_250_1746">
              <rect width="24" height="18" rx="2" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            <div className='text-black'>INR</div>
            <svg className='mt-2' width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.81 2.61035L3.90834 4.51202C3.68375 4.7366 3.31625 4.7366 3.09167 4.51202L1.19 2.61035" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </div>
        </div>
      
        <Slider
        style={{width:'92%'}}
        aria-label="Always visible"
        min={100}
        max={100000}
        defaultValue={60000}
        getAriaValueText={valuetext}
        
        marks={marks}
        valueLabelDisplay="on"
      />
         </div>

         <div className='flex space-x-2 mt-16'>
         <svg className='mt-[-4px]'
         width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="17" r="11" fill="#0F6EFF" stroke="#FDFDFF" stroke-width="2"/>
        <path d="M8.552 19.764L10.976 17.232L11.36 16.836C11.752 16.404 12.044 16.068 12.236 15.828C12.436 15.588 12.576 15.376 12.656 15.192C12.744 15 12.788 14.8 12.788 14.592C12.788 14.224 12.668 13.932 12.428 13.716C12.196 13.492 11.896 13.38 11.528 13.38C11.144 13.38 10.812 13.492 10.532 13.716C10.252 13.932 10.048 14.252 9.92 14.676L8.492 14.232C8.588 13.768 8.78 13.364 9.068 13.02C9.364 12.668 9.724 12.396 10.148 12.204C10.58 12.012 11.04 11.916 11.528 11.916C12.096 11.916 12.6 12.02 13.04 12.228C13.48 12.436 13.82 12.732 14.06 13.116C14.308 13.492 14.432 13.928 14.432 14.424C14.432 14.744 14.372 15.056 14.252 15.36C14.132 15.664 13.956 15.98 13.724 16.308C13.492 16.628 13.176 16.996 12.776 17.412L10.676 19.62H14.552V21H8.552V19.764Z" fill="white"/>
        </svg>

                <h2 className='font-semibold underline text-gray-700 '>
                  Location info</h2>
          </div>

        
      <div className='flex flex-col ml-10 mt-4'>
      <div className='flex flex-col space-y-5'>
            <h2>Location Type</h2>
            <button>
              <div className='flex space-x-2 border-[1px] border-gray-200
              w-[29%] rounded-full '>
                
                <h2 className=' bg-[#0F6EFF] w-[60%] 
                border-[1px] border-gray-200 rounded-full text-white text-center py-2
                 mr-3'>Location</h2>
                <h2 className='font-semibold mt-2 text-gray-500 '>Radius</h2>
              </div>

            </button>
            
          </div>
        <div className='flex mt-4 mb-[-14px] text-[#606060]'>
          <div className='block w-1/2'>Select Location</div>
         
        </div>

        <div className='flex mt-5 w-[90%]'>
                 <input 
                  className='bg-white p-4 w-full
                  border-[1px] rounded-lg border-gray-400'
                  type='text' onChange={e=>setLocation(e.target.value)}
                  placeholder='Search Location...'
                  />
                  <svg onClick={
                    ()=>navigator.geolocation.getCurrentPosition(
                      (position)=>{
                        console.log(position.coords.latitude)
                        console.log(position.coords.longitude)
                      }
                    )
                  }
                  className='mt-4 ml-[-39px] mr-10'
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.25H19.96C19.6 7.44 16.56 4.39 12.75 4.04V2C12.75 1.59 12.41 1.25 12 1.25C11.59 1.25 11.25 1.59 11.25 2V4.04C7.44 4.4 4.39 7.44 4.04 11.25H2C1.59 11.25 1.25 11.59 1.25 12C1.25 12.41 1.59 12.75 2 12.75H4.04C4.4 16.56 7.44 19.61 11.25 19.96V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V19.96C16.56 19.6 19.61 16.56 19.96 12.75H22C22.41 12.75 22.75 12.41 22.75 12C22.75 11.59 22.41 11.25 22 11.25ZM12 15.12C10.28 15.12 8.88 13.72 8.88 12C8.88 10.28 10.28 8.88 12 8.88C13.72 8.88 15.12 10.28 15.12 12C15.12 13.72 13.72 15.12 12 15.12Z" fill="#292D32"/>
                  </svg>

        </div>

      
        <div className='flex justify-between w-[92%] text-[#606060] mt-8'>
            <div>Select target Radius</div>
            
        </div>
      
        <Slider
        style={{width:'92%'}}
        aria-label="Always visible"
        min={1}
        max={30}
        defaultValue={24}
        getAriaValueText={valuetext}
        
        marks={marks2}
        valueLabelDisplay="on"
      />
         </div>
       </div>
    </div>
      

       <div onClick={()=>setStep(step+1)}
        className='flex justify-end mx-20 mt-[-74px] mb-20'>
        <button className='bg-[#0F6EFF] font-medium flex text-lg
        px-24 py-3 rounded-lg text-white font-Eudoxus'>
          Continue</button>
      </div>
        
     

    </div>
  )
}

export default CampaignSettings