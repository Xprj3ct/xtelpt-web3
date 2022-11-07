import React, { useContext, useState } from 'react'
import Header from '../home/header'
import Image from 'next/image'
import ProfileImage from '../../assets/profile.png'
import Ellipse from '../../assets/Ellipse 2.png'
import { useRouter } from 'next/router'
import { XContext } from '../../context/XContext'

const HostInput = () => {
  <div>
   <input className='w-[426px] h-[50px] bg-transparent rounded-[12px] text-white border-2 pl-2' placeholder='Host Type?' />
  </div>
}

const Auth = () => {
    const { connectWallet, appStatus, currentAccount } = useContext(XContext)
    const [newHost, setNewHost] = useState(false)
    const router = useRouter()

    function handleChange(event) {
      setNewHost(current => !current)
      console.log(event.target.value);
    }
    
    return (
      <div className='bg-[#252525]'>
       <div className='bg-hero bg-right w-full bg-no-repeat flex h-screen w-full'>
        <div className='grid w-full place-items-center'>
              <div className='text-[32px] font-noto text-white font-semibold'>Edit Profile details</div>
              <Image src={ProfileImage} />
              <input type="file" className='border-[#EAEDEE] rounded-[12px] text-white w-[426px] py-2 px-2 h-[50px] border-2' accept="image/*" />
              <input className='w-[426px] h-[50px] bg-transparent rounded-[12px] text-white border-2 pl-2' placeholder='Fullname' />
              {/* Host Toggle */}
              <div className='flex pr-12'>
                <div className='pr-2 -mt-1 text-[20px] text-[#FFFFFF]' title='Become a Host'>
              Host?</div>
              <label for="yellow-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" onChange={handleChange} value={newHost} id="yellow-toggle" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
</label>  
</div>
{newHost?  <input className='w-[426px] h-[50px] bg-transparent rounded-[12px] text-white border-2 pl-2' placeholder='Host Type?' />: null}
              <textarea className='w-[426px] h-[221px] rounded-[12px] text-white bg-transparent border-2 px-2' placeholder='Bio' />
              <div className='font-noto bg-[#755204] text-[14px] h-[41px] rounded-[12px] px-2 py-2 w-[150px] text-white'>Create Profile</div>
              </div>
              </div>
      </div>
    )
  }

export default Auth