import React, { useContext } from 'react'
import Header from '../components/home/header'
import Image from 'next/image'
import Ellipse from '../assets/Ellipse 2.png'
import { useRouter } from 'next/router'
import { XContext } from '../context/XContext';

const Checkschedule = () => {
  const { connectWallet, appStatus, currentAccount } = useContext(XContext)
  const router = useRouter()
  return (
    <div className='w-full h-full bg-hero bg-right bg-no-repeat flex-1'>
    <div className='font-bungee text-[34px] leading-[250px] flex text-white pl-[286px]'>
     <div>Schedules:</div>
     </div>
   <div className='place-items-center h-full w-full'>
       <div className='flex justify-center mb-[67px] w-full '>
           <div className='bg-[#2D1300] w-1/2 h-full shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
            <div className='flex justify-between p-6 '>
               <div className='justify-start pl-6 font-noto font-semibold text-[#817C7C] w-34 text-12'>Time and Date </div>
               <div className='justify-center items-center'><text className='justify-center text-12 text-red-400'>Description</text></div>
               <div className=' items-center pr-7 justify-end'>
               <div onClick={() => router.push('/call')} className=' text-white cursor-pointer font-noto rounded-[10px] h-[40px] w-[140px] text-center font-semibold bg-green-600  py-2 pl-5  text-[14px]'>
                Book Session 
               </div>
             </div></div>
               </div>
           </div>
           </div>
           </div>
  )}


export default Checkschedule