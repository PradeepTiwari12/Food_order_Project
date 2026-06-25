import React from 'react'
import image1 from "../assets/image1.avif"
import image2 from "../assets/image2.avif"
import image3 from "../assets/image3.avif"
import image4 from "../assets/image4.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'

function Card({name,image,id,price,type}) {
  let dispatch=useDispatch();
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-xl mt-5 flex flex-col gap-3 hover:border-2  border-r-red-400'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-xl shadow-2xl '>
        <img src={image} alt=""  className='object-cover'/>
       
      </div>
       <div className='text-2xl font-semibold '>{name}</div>
       <div className='flex justify-between items-center'>
        <div className='text-red-400 text-lg font-bold'>{price}</div>
       <div className='text-red-400 flex justify-center items-center text-lg font-bold gap-2'>{type=="veg"?<LuLeafyGreen />:<GiChickenOven />}
        
        <span >{type}</span>
       </div>

    
       </div>
   
           <button className='bg-red-300 w-full p-4 rounded-xl text-gray-900 hover:bg-red-400 transition-all' onClick={()=>{toast.success("Item added");dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1})); }}  >Add to dish</button>
     
    </div>
  )}

export default Card;
