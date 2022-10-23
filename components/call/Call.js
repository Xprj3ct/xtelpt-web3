import React from 'react'
import Image from 'next/image'
import Search from '../../assets/Vector.png'
import Profile from '../../assets/profle-p.png'
import Notification from '../../container/notification'
import { BsMicFill, BsFillChatLeftFill } from 'react-icons/bs'
import { MdAddReaction } from 'react-icons/md'

const Call = () => {
  return (
    <div className='w-full h-screen bg-hero bg-right-bottom bg-no-repeat flex-1'>
    {/* <div className='font-bungee text-[34px] leading-[250px] flex  justify-between text-white pl-[286px]'>
     <div>CAMPAIGNS:</div>
    
   </div> */}
   <div className='grid place-items-center  h-full w-full'>
           <div className='flex justify-center items-center mb-[11px] w-full '>
            <div className='w-[274px] flex h-[276px] rounded-full bg-[#D9D9D940]'>
            <div className='w-[252px] flex h-[258px] ml-[12px] mt-2 rounded-full bg-[#252525]'>
            <div className='w-[228px] flex h-[236px] ml-[12px] mt-3 rounded-full bg-[#D9D9D9BF]'>
              <div className='pt-1 pl-[6px] '>
            <Image src={Profile}  height={225} width={214} />
            </div>
            </div>
            </div>
            </div>
           </div>
           <div className='bottom-0 bg-[#755204] rounded-[10px] place-items-center h-[70px] w-[995px]'>
              <div className='flex py-5 w-full justify-center'>
            <BsMicFill className='text-[#ACACAC] h-8 w-8' />
            <Notification />
            <MdAddReaction className='text-[#ACACAC] h-8 w-8' />
            </div>
           </div>
           </div>
</div>
  )
}

export default Call