import React, { useState,useContext } from 'react'
import Nav from '../compoents/Nav'
import Categories from '../Category'
import Card from '../compoents/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../compoents/Card2'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'
function Home() {
 let {cate,setCate,input,showCart,setshowCart}=useContext(dataContext);

 function filter(category){
  if(category==="All"){
    setCate(food_items);
  }
  else{
    let newlist=food_items.filter((item)=>item.food_category===category)
    setCate(newlist);
  }
 }

let items=useSelector(state=>state.cart)
let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryfee=20;
let taxes=subtotal*0.5/100;
let grandtotal=Math.floor(subtotal+deliveryfee+taxes);




  return (
    <div className='bg-slate-200 w-full min-h-screen'>
     <Nav/>
     {!input? <div  className="flex flex-wrap items-center justify-center w-[100%] gap-4">{Categories.map((item)=>{
      return(
        
      <div className="w-[140px] h-[140px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out hover:bg-red-200  hover:shadow-md active:scale-95  cursor-pointer  " key={item.id || item.name} onClick={()=>filter(item.name)}>
         <div>{item.image}</div>
         <div >{item.name}</div>
         </div>
     
      
      )}) }</div>:null}
    
      
      <div className='w-full flex flex-wrap gap-5 px-3 justify-center items-center'>
        {cate.length>1?cate.map((item)=>{
          return(
          <Card key={item.id || item.food_name} id={item.id || item.food_name} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type}/>
          )
        }):<div className='text-2xl mt-5 text-red-400 font-semibold'>No Dish Found!</div>}
    
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"} flex flex-col items-center overflow-auto`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-red-400 text-[18px] font-semibold '>Order items</span>
        <RxCross1 className='w-[30px] h-[25px] text-red-400 text-[18px] font-semibold cursor-pointer hover:text-gray-500' onClick={()=>setshowCart(false)} />
        </header>

        {items.length>0? <>
     <div>
      {items.map((item)=>{
      return (<Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>)
      })}
     </div>
     <div className='w-full border-t-2 border-b-2 border-gray-600 mt-7 flex flex-col gap-4 p-8'>
      <div className='w-full flex justify-between items-center'>
        <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
        <span className='text-lg text-red-400 font-semibold '>Rs {subtotal}/-</span>
      </div>
     <div className='w-full flex justify-between items-center'>
        <span className='text-lg text-gray-600 font-semibold'>Deliveryfee</span>
        <span className='text-lg text-red-400 font-semibold '>Rs {deliveryfee}/-</span>
      </div>
       <div className='w-full flex justify-between items-center'>
        <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
        <span className='text-lg text-red-400 font-semibold '>Rs {taxes}/-</span>
      </div>
     
     </div>
       <div className='w-full flex justify-between items-center gap-4 p-8'>
        <span className='text-xl text-gray-600 font-semibold'>Grandtotal</span>
        <span className='text-xl text-red-400 font-semibold '>Rs {grandtotal}/-</span>
      </div>
      <button className='bg-red-300 w-[80%] p-4 rounded-xl text-gray-900 hover:bg-red-400 transition-all' onClick={()=>(toast.success("Order Placed!"))}  >Place Order</button>
      </>:
      <div className='text-2xl mt-5 text-red-400 font-semibold'>
        Cart is Empty!
        </div>}
       
      </div>
  
    </div>
  )
}

export default Home

