import React, { useContext } from 'react'
import Image from 'next/image'
import ProfileP from '../../assets/profle-p.png'
import Logo from '../../assets/Logo.png'
import Notification from '../../container/notification';
import { useRouter } from "next/router";
import { XContext } from '../../context/XContext';
import NewCampaign from '../../container/newCampaign';

const Connected = () => {
    const { connectWallet, appStatus, currentAccount } = useContext(XContext)
const router = useRouter()
return (
<div className='w-full h-full flex'>
<div className='px-[125px] flex w-full justify-between'>
<div onClick={() => router.push('/')} className=' pt-[57px] cursor-pointer flex'>
    <Image src={Logo} height={48.75} width={100} />
 </div>
    <div className='flex pt-[72px] font-noto text-[16px] text-white'>
        <div onClick={() => router.push('/campaigns')} className='mr-[20px] cursor-pointer leading-[10px] '>CAMPAIGNS</div>
        <div onClick={() => router.push('/auth')} className='mr-[20px] cursor-pointer leading-[10px] '>HOSTS</div>
        <div  className='mr-[20px] cursor-pointer leading-[10px] '><NewCampaign/></div>
        <div onClick={() => router.push('/iframe')} className='mr-[20px] cursor-pointer leading-[10px] '>FAQ</div>
    </div> 
    <div >
    <div onClick={() => router.push('/profile')} className='bg-[#A77300] flex  px-3 font-noto cursor-pointer font-semibold  mt-[57px] w-[120px] h-[40px] text-center rounded-[30px]'>
        <Image src={ProfileP} height={24} width={24} />
        <div className='text-[12px] flex-1'>
            <div>Jerry</div>
        {currentAccount.slice(0, 6)}...
        </div>
    </div>
</div>
</div>
</div>
)
}

export default Connected