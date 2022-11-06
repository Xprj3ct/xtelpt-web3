import React, { useContext } from 'react'
import Header from '../home/header'
import Image from 'next/image'
import ProfileImage from '../../assets/Oval.png'
import Ellipse from '../../assets/Ellipse 2.png'
import { useRouter } from 'next/router'
import { XContext } from '../../context/XContext';

const Profile = () => {
  const { connectWallet, appStatus, currentAccount } = useContext(XContext)
  const router = useRouter()
  return (
     <div className='grid place-items-center h-screen w-full'>
            <div className='flex justify-center mb-10 w-full '>
                <div className='bg-[#2D1300] w-1/3 h-90 shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-6 w-full'>
                    <Image src={ProfileImage} height={150} width={142.67}  />
                    <div className='font-bungee text-[24px] mt-2 text-white'>Amanda Stenberg</div>
                    <div className='font-noto font-semibold text-[#FFFFFF] leading-[14px]  text-[16px]'>{currentAccount.slice(0, 9)}...</div>
                    <div className='flex font-noto font-semibold mt-[10px] ] text-[24px]'>
                      <div className='text-green-400'>Host</div>
                      <div className='w-5 pl-2 h-5 -mt-1'>
                      <Image src={Ellipse}  height={5} width={5} />
                      </div>
                      <div className='text-white text-10'>Therapist</div>
                    </div>
                    <div className='font-noto text-12 mt-1 text-[#817C7C]'>humanitarian and blablabla</div>
                    <div className='flex items-center w-full justify-center mt-[8px]'>
                    <div onClick={() => router.push('/call')} className='flex cursor-pointer font-noto rounded-[10px] h-15 w-50 text-center font-medium mb-5 bg-[#A77300] mt-[10px] p-2'>
                    <div className=' justify-center text-white text-15'>Add Schedule</div>
                    </div>
                   
                  </div>
                  <div className='flex -mt-[40px] mr-12 w-full'>
                  <div className='text-right text-[#817C7C] text-[14px] mb-10 ml-auto'><u>Ratings & Reviews</u></div>
                  </div>
                    </div>
                   
                </div>
                
                </div>
    </div>
  )
}

export default Profile