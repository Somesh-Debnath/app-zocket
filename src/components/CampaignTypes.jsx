import React,{useState} from 'react'

function CampaignTypes({Platform,title,description,icon,parentCallback}) {
 const [selected,setSelected] = useState(false)
  const [platform,setPlatform] = useState("")
  const active = selected ? "active" : ""
  const handleChange = () => {
    setSelected(!selected)
    setPlatform(Platform)
    parentCallback(platform)    
  }
  //console.log(platform)
  return (
    <div onClick={handleChange}
    className={`flex border-[1px] border-gray-300 ${selected && 
      'focus:border-2 focus-within:border-[#004cef]'}
    hover:border-[#1069dd] hover:cursor-pointer 
    hover:bg-[#E7F0FF4D] rounded-xl m-[6px] w-[32%] px-5 py-5`}>
        <div className='flex space-x-3'>
            <img src={icon} alt='icon' className='w-5 mt-2 h-5'/>
            
            <div className='flex flex-col font-sans font-Eudoxus'>
                <h1 className='text-gray-800 text-lg font-semibold'>{title}</h1>
                <span className='text-xs text-gray-400'>{description}</span>
            </div>
        </div>
    </div>
  )
}

export default CampaignTypes