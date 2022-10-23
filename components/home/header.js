import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/Logo.png'
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  return (
    <div className='w-full h-full flex'>
        <div className='px-[125px] flex w-full justify-between'>
        <div onClick={() => router.push('/')} className=' pt-[57px] cursor-pointer flex'>
            <Image src={Logo} height={48.75} width={100} />
         </div>
            <div className='flex pt-[72px] font-noto text-[16px] text-white'>
                <div onClick={() => router.push('/campaigns')} className='mr-[20px] cursor-pointer leading-[10px] '>CAMPAIGNS</div>
                <div onClick={() => router.push('/host')} className='mr-[20px] cursor-pointer leading-[10px] '>HOSTS</div>
                <div onClick={() => router.push('/host')} className='mr-[20px] cursor-pointer leading-[10px] '>NOTIFICATION</div>
                <div onClick={() => router.push('/host')} className='mr-[20px] cursor-pointer leading-[10px] '>FAQ</div>
            </div>
            <div className='bg-[#A77300] text-[12px] font-noto cursor-pointer font-semibold py-3 mt-[57px] w-[120px] h-[40px] text-center rounded-[30px]'>CONNECT WALLET</div>
        </div>
    </div>
  )
} 

export default Header