import React from 'react'
import Image from 'next/image'
import ProfileImage from '../../assets/2.png'
import Ellipse from '../../assets/Ellipse 2.png'
import Search from '../../assets/Vector.png'
import Header from '../home/header'
import { useRouter } from 'next/router'

const Host = () => {
  const router = useRouter()
  return (
    <div>
    <div className='w-full bg-hero bg-left-4 bg-no-repeat flex-1'>
        <div className='font-bungee text-[34px] leading-[250px] flex  justify-between text-white pl-[286px]'>
          <div>TOP HOSTS:</div>
          <div className='mt-[100px] mr-[204px]'>
            <div className='rounded-[12px] w-[154px] leading-[26px] pt-[6px] flex-auto text-[16px] border-[#EAEDEE] pl-[12px] h-[40px] bg-transparent border-[2px]'>
        <input type="search" placeholder='Search' className='bg-transparent font-sans w-[110px] outline-none h-[16px] '/>
        <Image src={Search} height={15} width={15} className='mt-2' />
        </div>
        </div>
        </div>
        <div className='grid place-items-center w-full'>
            <div className='flex px-[265px] w-full justify-between'>
                <div onClick={ () => router.push('/call') } className='bg-[#2D1300] w-[350px] cursor-pointer h-[250px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                    <Image src={ProfileImage} height={54} width={55} />
                    <div className='font-bungee text-white'>Amanda Stenberg</div>
                    <div className='font-noto font-semibold text-white leading-[14px] text-[8px]'>0x9035a35...</div>
                    <div className='flex font-noto font-semibold mt-[10px] leading-[14px] text-[14px]'>
                      <div className='text-white'>Host  </div>
                      <div className='w-[5px] h-[5px] -mt-[2px]'>
                      <Image src={Ellipse} className='h-[5px] text-[#D9D9D9] w-[5px]' height={5} width={5} />
                      </div>
                      <div className='text-white'>  Therapist</div>
                    </div>
                    <div className='text-[10px] leading-[14px] mt-[15px] text-[#817C7C]'>humanitarian and blablabla</div>
                  </div>
                </div>
                <div onClick={ () => router.push('/call') } className='bg-[#2D1300] w-[350px] cursor-pointer h-[250px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                    <Image src={ProfileImage} height={54} width={55} />
                    <div className='font-bungee text-white'>Amanda Stenberg</div>
                    <div className='font-noto font-semibold text-white leading-[14px] text-[8px]'>0x9035a35...</div>
                    <div className='flex font-noto font-semibold mt-[10px] leading-[14px] text-[14px]'>
                      <div className='text-white'>Host  </div>
                      <div className='w-[5px] h-[5px] -mt-[2px]'>
                      <Image src={Ellipse} className='h-[5px] text-[#D9D9D9] w-[5px]' height={5} width={5} />
                      </div>
                      <div className='text-white'>  Therapist</div>
                    </div>
                    <div className='text-[10px] leading-[14px] mt-[15px] text-[#817C7C]'>humanitarian and blablabla</div>
                  </div>
                </div>
            </div>
            <div className='flex px-[265px] mb-[67px] mt-[58px] w-full justify-between'>
            <div onClick={ () => router.push('/call') } className='bg-[#2D1300] w-[350px] cursor-pointer h-[250px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                    <Image src={ProfileImage} height={54} width={55} />
                    <div className='font-bungee text-white'>Amanda Stenberg</div>
                    <div className='font-noto font-semibold text-white leading-[14px] text-[8px]'>0x9035a35...</div>
                    <div className='flex font-noto font-semibold mt-[10px] leading-[14px] text-[14px]'>
                      <div className='text-white'>Host  </div>
                      <div className='w-[5px] h-[5px] -mt-[2px]'>
                      <Image src={Ellipse} className='h-[5px] text-[#D9D9D9] w-[5px]' height={5} width={5} />
                      </div>
                      <div className='text-white'>  Therapist</div>
                    </div>
                    <div className='text-[10px] leading-[14px] mt-[15px] text-[#817C7C]'>humanitarian and blablabla</div>
                  </div>
                </div>
                <div onClick={ () => router.push('/call') } className='bg-[#2D1300] w-[350px] cursor-pointer h-[250px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                    <Image src={ProfileImage} height={54} width={55} />
                    <div className='font-bungee text-white'>Amanda Stenberg</div>
                    <div className='font-noto font-semibold text-white leading-[14px] text-[8px]'>0x9035a35...</div>
                    <div className='flex font-noto font-semibold mt-[10px] leading-[14px] text-[14px]'>
                      <div className='text-white'>Host  </div>
                      <div className='w-[5px] h-[5px] -mt-[2px]'>
                      <Image src={Ellipse} className='h-[5px] text-[#D9D9D9] w-[5px]' height={5} width={5} />
                      </div>
                      <div className='text-white'>  Therapist</div>
                    </div>
                    <div className='text-[10px] leading-[14px] mt-[15px] text-[#817C7C]'>humanitarian and blablabla</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Host