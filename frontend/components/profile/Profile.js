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
            <div className='flex justify-center mb-[67px] w-full '>
                <div className='bg-[#2D1300] w-[600px] h-[400px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-12 w-full'>
                    <Image src={ProfileImage} height={150} width={142.67}  />
                    <div className='font-bungee text-[24px] mt-2 text-white'>Amanda Stenberg</div>
                    <div className='font-noto font-semibold text-[#FFFFFF] leading-[14px]  text-[16px]'>{currentAccount.slice(0, 9)}...</div>
                    <div className='flex font-noto font-semibold mt-[10px] ] text-[24px]'>
                      <div className='text-white'>Host  </div>
                      <div className='w-[5px] h-[5px] -mt-[2px]'>
                      <Image src={Ellipse} className='h-[5px] text-[#D9D9D9] w-[5px]' height={5} width={5} />
                      </div>
                      <div className='text-white'>  Therapist</div>
                    </div>
                    <div className='font-noto text-[10px] mt-1 text-[#817C7C]'>humanitarian and blablabla</div>
                    <div className='flex items-center w-full justify-center mt-[8px]'>
                    <div onClick={() => router.push('/call')} className='flex cursor-pointer font-noto rounded-[10px] h-[40px] w-[125px] text-center font-medium bg-[#A77300] mt-[10px] py-2 pl-1 text-[16px]'>
                    <div className='text-white text-[16px]'>Add Schedule</div>
                    </div>
                   
                  </div>
                  <div className='flex -mt-[40px] mr-12 w-full'>
                  <div className='text-right text-[#817C7C] text-[14px] ml-auto'>Ratings & Review</div>
                  </div>
                    </div>
                   
                </div>
                
                </div>
    </div>
  )
}

export default Profile