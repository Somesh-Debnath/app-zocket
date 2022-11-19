import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import axios from 'axios'
import ProductCard from '../../components/ProductCard';
function ChooseProducts({step,nextStep,prevStep,values,
  parentCallback,handleChange}) {

  const [products, setProducts] = React.useState([])
  const [img, setImg] = React.useState()
  const [campaignName, setcampaignName] = React.useState("")

  const handleCallback=(childData)=>{
    setcampaignName(childData.name)
    setImg(childData.img)
  }

 handleChange({campaignName})
  values.campaignName=campaignName
  
   const continu=(e)=>{
        e.preventDefault();
        nextStep();
    }
 
  useEffect(() => {
    axios.get('http://localhost:8000/getProducts').then((res) => {
      setProducts(res.data.products)
    })
  }, [])

  //console.log(products.length)

  //const handleChange
        
        return (
    <div className="flex relative flex-col ">
          <Navbar/>   
        <Sidebar/>

        <div className='absolute top-[5.2rem] left-[7.25rem]' >
          <h1 className="font-bold text-2xl font-Eudoxus my-[-3px]">Your Ad Campaign</h1>
          <span className='text-sm font-Eudoxus text-gray-500'>
            Launch your ad in just 4 easy steps</span>
        </div>

       <div className='flex flex-col relative ml-28 mt-40 max-w-6xl 
      my-5 p-6 rounded-xl border-[0.3px] border-blue-200'>

       <div className='flex space-x-2 mt-3 ml-2' >
          <h1 className="font-bold text-lg font-Eudoxus 
          my-[-3px]">Choose the product</h1>
          <span className='text-sm font-Eudoxus text-gray-500 mt-[2px]'>
           (Step 2 of 4)</span>
        </div>
      <div className='flex font-Eudoxus flex-wrap mt-3'>
        
        {products.slice(4).map((product,i) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array
              (product.image.data.data))
          );
          return <ProductCard 
          key={i} parentCallback={handleCallback}
          img={`data:image/png;base64,${base64String}`}
          name={product.name} price={product.price}/>
           })}
       
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

export default ChooseProducts