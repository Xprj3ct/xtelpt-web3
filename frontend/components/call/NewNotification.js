import React, {useContext} from 'react'
import { XContext } from '../../context/XContext';
import { useRouter } from 'next/router'

const NewNotification = () => {
  const { connectWallet, appStatus, currentAccount } = useContext(XContext)
  const router = useRouter()
  return (
    <div className='m-4'>
        <div className=' flex-1 text-center w-full '>
            <div className='h-full text-white flex-1 w-full'>
                <div className='bg-[#D9D9D933] py-2 h-[40px] w-[296px] text-left flex pl-2 mt-[12px]'>Hey! Your call starts in 15mins</div>
                <div className='bg-[#D9D9D933] py-2 h-[40px] w-[296px] mt-[12px] pl-2 flex justify-between'>It’s time join call now <div onClick={() => router.push('/call/currentAccount')} className='bg-[#6BE42B] w-[56px] py-[5px] text-[12px] mr-2 rounded-[7px] h-[28px]'>Join</div></div>
            </div>
        </div>
    </div>
  )
}

export default NewNotification