import React,{useContext} from 'react'
import {CampaignContext} from '../Contexts/CampaignContext'
function ProductCard({names,img,price}) {
  const [selected, setSelected] = React.useState(false)
  const {image,setImage,name,setName,campaignName,setCampaignName}=useContext(CampaignContext)
  
  const handleChange = (e) => {
    setSelected(!selected)
    setImage(img)
    setName(names)
    setCampaignName(names+" Campaign")
    console.log(e.currentTarget)
  }
  // console.log(image)
   //console.log(names)
  return (
    <div onClick={handleChange}
    className='flex border-[1px] border-gray-300 
    hover:border-[#1977F3] hover:bg-[#E7F0FF4D] hover:cursor-pointer 
    rounded-xl m-[6px] w-[31%] px-5 py-5'>
      
      <div className='relative top-[12px] left-[16.8rem]'>
            <svg 
            width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 19.9062C5.31125 19.9062 1.09375 15.6888 1.09375 10.5C1.09375 5.31125 5.31125 1.09375 10.5 1.09375C15.6888 1.09375 19.9062 5.31125 19.9062 10.5C19.9062 15.6888 15.6888 19.9062 10.5 19.9062ZM10.5 2.40625C6.0375 2.40625 2.40625 6.0375 2.40625 10.5C2.40625 14.9625 6.0375 18.5938 10.5 18.5938C14.9625 18.5938 18.5938 14.9625 18.5938 10.5C18.5938 6.0375 14.9625 2.40625 10.5 2.40625Z" fill="#D8D8D8"/>
            <path d="M9.25751 13.6324C9.08251 13.6324 8.91626 13.5624 8.79376 13.4399L6.31751 10.9637C6.06376 10.7099 6.06376 10.2899 6.31751 10.0362C6.57126 9.7824 6.99126 9.7824 7.24501 10.0362L9.25751 12.0487L13.755 7.55115C14.0088 7.2974 14.4288 7.2974 14.6825 7.55115C14.9363 7.8049 14.9363 8.2249 14.6825 8.47865L9.72126 13.4399C9.59876 13.5624 9.43251 13.6324 9.25751 13.6324Z" fill="#D8D8D8"/>
            </svg>
     </div>
      <div className='flex mr-3'>
        <img src={img} alt='' />
      </div>
     
        <div className='flex flex-col '>
          <h3 className='text-gray-800 font-sans font-semibold'>{names}</h3>
          <span className='text-xs font-sans font-semibold
           text-[#A5A5A5]'>Rs: {price}</span>
        </div>
        
      
    </div>
  )
}

export default ProductCard