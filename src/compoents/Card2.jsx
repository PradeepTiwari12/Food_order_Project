import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';
import { IncrementQty } from '../redux/cartSlice';
import { DecrementQty } from '../redux/cartSlice';

function Card2({id,name,price,image,qty}) {
  let dispatch=useDispatch();
  return (
    <div className='w-full h-[120px]  p-2 flex justify-between shadow-2xl '>
       <div className='w-[60%] h-full flex gap-3 '>
        < div className='w-[50%] h-full overflow-hidden rounded-xl'>
          <img src={image} alt=''className='object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
           <div className='text-lg text-gray-600 font-semibold'>{name}</div>
           <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-xl overflow-hidden shadow-xl font-semibold border-2 border-red-400 text-xl'>
            <button className='w-[30%] h-full bg-white flex justify-center items-center text-red-400 hover:bg-gray-200'onClick={() =>{qty>1? dispatch(DecrementQty({id:id})):1}}>-</button>
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-red-400'>{qty}</span>
            <button className='w-[30%] h-full bg-white flex justify-center items-center text-red-400 hover:bg-gray-200'onClick={() => dispatch(IncrementQty({id:id}))}>+</button>
           </div>
        </div>
       </div>
       <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-lg text-red-400 font-semibold'>RS {price}/-</span>
        <RiDeleteBin6Line className='w-[30px] h-[30px] text-green-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))} />
       </div>
    </div>
  )
}

export default Card2
