import React from 'react'
import Header from '../home/header'
import Image from 'next/image'
import ProfileImage from '../../assets/profle-p.png'
import { useRouter } from 'next/router'

const Profile = () => {
  return (
     <div className='grid place-items-center h-screen w-full'>
            <div className='flex justify-center mb-[67px] w-full '>
                <div className='bg-[#2D1300] w-[600px] h-[400px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                    <Image src={ProfileImage} height={150} width={142.67}  />
                    <div className='font-bungee text-[24px] mt-2 text-white'>lgbtq+ issues</div>
                    <div className='font-noto font-semibold text-[#817C7C] leading-[14px] mt-4 text-[32px]'>humanitarian and blablabla</div>
                    <div className='flex items-center w-full justify-center mt-[42px]'>
                    <div onClick={() => router.push('/call')} className='flex cursor-pointer font-noto rounded-[10px] h-[40px] w-[114px] text-center font-semibold bg-[#A77300] mt-[10px] py-2 pl-[16px] text-[16px]'>
                     Get Help 
                    </div>
                    {/* <div className='text-right flex'>Voluteer</div> */}
                  </div>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Profile