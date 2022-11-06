import React, { useContext } from 'react'
import Header from '../home/header'
import Image from 'next/image'
import ProfileImage from '../../assets/profile.png'
import Ellipse from '../../assets/Ellipse 2.png'
import { useRouter } from 'next/router'
import { XContext } from '../../context/XContext'

const Auth = () => {
    const { connectWallet, appStatus, currentAccount } = useContext(XContext)
    const router = useRouter()
    return (
      <div className='bg-[#252525]'>
       <div className='bg-hero bg-right w-full bg-no-repeat flex h-screen w-full'>
        <div className='grid w-full place-items-center'>
              <div className='text-[32px] font-noto text-white font-semibold'>Edit Profile details</div>
              <Image src={ProfileImage} />
              <input type="file" className='border-[#EAEDEE] rounded-[12px] w-[426px] py-2 px-2 h-[50px] border-2' accept="image/*" />
              <input className='w-[426px] h-[50px] bg-transparent rounded-[12px] border-2 pl-2' placeholder='Fullname' />
              <textarea className='w-[426px] h-[221px] rounded-[12px] bg-transparent border-2 px-2' placeholder='Bio' />
              <div className='font-noto bg-[#755204] text-[14px] h-[41px] rounded-[12px] px-2 py-2 w-[150px] text-white'>Create Profile</div>
              </div>
              </div>
      </div>
    )
  }

export default Auth