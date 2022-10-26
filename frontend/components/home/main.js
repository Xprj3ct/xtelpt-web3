import React from 'react'
import Image from 'next/image'
import HeroIcon from '../../assets/3d 1.png'
import LineA from '../../assets/Line 1.png'
import LineB from '../../assets/Line 2.png'
import Group9 from '../../assets/Group 9.png'
import Phone from '../../assets/Antigravity.png'

const Main = () => {
  return (
    <div className='flex overflow-y-hidden' >
        <div className='flex-1 bg-hero bg-bottom bg-no-repeat'>
         <div className='absolute items-center w-full flex justify-center pt-[100px]'>
            
        <Image src={HeroIcon} height={363} width={330} />
        </div>
        <div className='mt-[75px] w-full  text-center h-[600px] bg-[#D9D9D9] text-[60px]'>
            <div className='font-bungee h-[250px] pt-[112px]'>
                <div className='leading-[250px] mt-[250px]'>BIG CATCHPHRASE</div>
            </div>
        </div>
        <div className='text-[#FFFFFF] text-[32px] text-center w-full leading-[250px] font-noto'>X-Stealth-Pronounciation</div>
        <div className=' w-full text-center'>
        <Image src={Group9} width={147} height={43} />
        </div>
        <div className='grid place-items-center mt-[46px] flex-1'>
        <div className='bg-[#2D1300] w-[815px] h-[403px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px]  mx-[120px] '>
            <div className='w-full text-center'>
            <Image src={Phone} height={210} width={220} />
            </div>
            <div className='font-noto text-[40px] leading-[10px] text-white text-center'>REASONS</div>
            <div className='font-noto text-[24px] leading-[33px] mt-[59px] text-white text-center'>Explanations on the reason and the benefits our services provides</div>
        </div>
        <div className='bg-[#2D1300] w-[815px] h-[403px] mt-[76px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px]  mx-[120px] '>
            <div className='w-full text-center'>
            <Image src={Phone} height={210} width={220} />
            </div>
            <div className='font-noto text-[40px] leading-[10px] text-white text-center'>REASONS</div>
            <div className='font-noto text-[24px] leading-[33px] mt-[59px] text-white text-center'>Explanations on the reason and the benefits our services provides</div>
        </div>
        </div>
        <div className='w-full mt-[70px]'>
            <div className='flex justify-between px-[40px] w-full'>
                <div className='border-b-[2px]  w-[328px] border-[#000000]'></div>
                <div className='font-bungee text-[34px]  text-white'>How it works</div>
                <div className='border-b-[2px]  w-[328px] border-[#000000]'></div>
            </div>
            <div className='flex w-full justify-between px-[70px]'>
            <div className='bg-[#2D1300] mt-[76px] rounded-[30px] w-[312px] h-[273px]'>
                <div className='font-noto text-[40px] mt-[49px] text-center text-white'>CAMPAIGNS</div>
                <div className='text-[24px] font-noto text-center text-white'>Explanations on the reason and the benefits our services provides</div>
            </div>
            <div className='bg-[#2D1300] mt-[76px] rounded-[30px] w-[312px] h-[273px]'>
                <div className='font-noto text-[40px] mt-[49px] text-center text-white'>HOSTS</div>
                <div className='text-[24px] font-noto text-center  text-white'>Explanations on the reason and the benefits our services provides</div>
            </div>
            <div className='bg-[#2D1300] mt-[76px] rounded-[30px] w-[312px] h-[273px]'>
                <div className='font-noto text-[40px] mt-[49px] text-center text-white'>USERS</div>
                <div className='text-[24px] font-noto  text-center text-white'>Explanations on the reason and the benefits our services provides</div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main