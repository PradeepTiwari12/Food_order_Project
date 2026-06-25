import React, { useContext, useEffect } from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
  let {input,setInput,cate,setCate,showCart,setshowCart}=useContext(dataContext);
  useEffect(()=>{
    let newlist=food_items.filter((item)=> item.food_name.includes(input)|| item.food_name.toLowerCase().includes(input))
    setCate(newlist);
  },[input]);

  let items=useSelector((state)=>state.cart)
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl"><IoFastFoodOutline className='w-[30px] h-[30px] text-red-500' /></div>

      <form className='w-[50%] h-[60px] bg-white rounded-md shadow-xl flex  items-center px-5 gap-4 md:w-[70%]' action="" onSubmit={(e)=>e.preventDefault()}>
        <FaSearch  className='text-red-500 w-[20px] h-[20px] '/>
        <input type="text" placeholder='Search for food' className='w-[100%] outline-none border-none text-[16px] md:text-[20px]' value={input} onChange={(e)=>setInput(e.target.value)}/>
      </form>

         <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative" onClick={()=>setshowCart(true)}>
          <span className='absolute w-[20px] h-[20px] rounded-full bg-red-500 text-white text-[12px] flex justify-center items-center -top-0 -right-0'>{items.length}</span>
          <FaShoppingBag className='w-[30px] h-[30px] text-red-500' /></div>

    </div>
  )
}

export default Nav
