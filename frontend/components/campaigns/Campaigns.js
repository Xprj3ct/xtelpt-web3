import React from 'react'
import Image from 'next/image'
import Search from '../../assets/Vector.png'
import ProfileImage from '../../assets/profle-p.png'
import { useRouter } from 'next/router'
import Ellipse from '../../assets/Ellipse 2.png'
import { BsPlus } from 'react-icons/bs'
import NewModal from '../../container/newModal'

const Campaigns = () => {
  const router = useRouter()
  return (
    <div className='w-full h-full bg-hero bg-right bg-no-repeat flex-1'>
         <div className='font-bungee text-[34px] leading-[250px] flex  justify-between text-white pl-[286px]'>
          <div>CAMPAIGNS:</div>
          <div className='mt-[100px] flex mr-[204px]'>
            <BsPlus className='text-[#A77300]' />
            <div className='rounded-[12px] w-[154px] leading-[26px] pt-[6px] flex-auto text-[16px] border-[#EAEDEE] pl-[12px] h-[40px] bg-transparent border-[2px]'>
        <input type="search" placeholder='Search' className='bg-transparent font-sans w-[110px] outline-none h-[16px] '/>
       <div className='-mt-5 ml-28'>
       <NewModal /></div>
        </div>
        </div>
        </div>
        <div className='grid place-items-center h-full w-full'>
            <div className='flex justify-center mb-[67px] w-full '>
                <div className='bg-[#2D1300] w-[600px] h-[400px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                    <Image src={ProfileImage} height={150} width={142.67}  />
                    <div className='font-bungee text-[24px] mt-2 text-white'>lgbtq+ issues</div>
                    <div className='font-noto font-semibold text-[#817C7C] leading-[14px] mt-4 text-[32px]'>humanitarian and blablabla</div>
                    <div className='flex items-center w-full justify-center mt-[42px]'>
                    <div onClick={() => router.push('/call')} className='flex text-white cursor-pointer font-noto rounded-[10px] h-[40px] w-[114px] text-center font-semibold bg-[#A77300] mt-[10px] py-2 pl-[16px] text-[16px]'>
                     Get Help 
                    </div>
                    {/* <div className='text-right flex'>Voluteer</div> */}
                  </div>
                    </div>
                    <div className='flex -mt-[40px] pr-12 w-full'>
                  <div className='text-right text-[#817C7C] text-[14px] ml-auto'>Voluteer</div>
                  </div>
                </div>
                </div>
                <div className='flex justify-center mb-[67px] w-full '>
                <div className='bg-[#2D1300] w-[600px] h-[400px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                    <Image src={ProfileImage} height={150} width={142.67}  />
                    <div className='font-bungee text-[24px] mt-2 text-white'>lgbtq+ issues</div>
                    <div className='font-noto font-semibold text-[#817C7C] leading-[14px] mt-4 text-[32px]'>humanitarian and blablabla</div>
                    <div className='flex items-center w-full justify-center mt-[42px]'>
                    <div onClick={() => router.push('/call')} className='flex text-white cursor-pointer font-noto rounded-[10px] h-[40px] w-[114px] text-center font-semibold bg-[#A77300] mt-[10px] py-2 pl-[16px] text-[16px]'>
                     Get Help 
                    </div>
                    {/* <div className='text-right flex'>Voluteer</div> */}
                  </div>
                    </div>
                    <div className='flex -mt-[40px] pr-12 w-full'>
                  <div className='text-right text-[#817C7C] text-[14px] ml-auto'>Voluteer</div>
                  </div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Campaigns