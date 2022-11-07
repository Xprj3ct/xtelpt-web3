import React, { useContext, useEffect, useState } from 'react'
import Header from '../home/header'
import Image from 'next/image'
import ProfileImage from '../../assets/Oval.png'
import Ellipse from '../../assets/Ellipse 2.png'
import { useRouter } from 'next/router'
import { XContext } from '../../context/XContext';
import { ethers } from 'ethers'
import { abi } from '../../constants'

const Profile = () => {
  const { connectWallet, appStatus, currentAccount, xtelptAddress } = useContext(XContext)
  const router = useRouter()

  const [me, setMe] = useState()

  const updateUIValues = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, provider)

    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        let prof = await xtelptContract.getProfile(`${addressArray[0]}`)
        setMe(prof)
      } else {
        console.log("no metamask")
      }
    } catch (err) {
      console.log("an error occured")
    }

  }

  useEffect(() => {
    setTimeout(() => {
      updateUIValues()
    }, 1000);
  }, [])


  return (
    <div className='grid place-items-center h-screen w-full'>
      <div className='flex justify-center mb-10 w-full '>
        <div className='bg-[#2D1300] w-1/3 h-90 shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
          <div className='grid place-items-center mt-6 w-full'>
            <Image src={`https://gateway.pinata.cloud/ipfs/${me?.profilePic}`} height={150} width={150} className="rounded-full" />
            <div className='font-bungee text-[24px] mt-2 text-white'>{me?.name}</div>
            <div className='font-noto font-semibold text-[#FFFFFF] leading-[14px]  text-[16px]'>{currentAccount.slice(0, 9)}...</div>
            <div className='flex font-noto font-semibold mt-[10px] ] text-[24px]'>
              <div className='text-green-400'>{me?.role}</div>
              <div className='w-5 pl-2 h-5 -mt-1'>
                <Image src={Ellipse} height={5} width={5} />
              </div>
              <div className='text-white text-10'>Therapist</div>
            </div>
            <div className='font-noto text-12 mt-1 text-[#817C7C]'>{me?.bio}</div>
            <div className='flex items-center w-full justify-center mt-[8px]'>
              {me?.role == "Host" && (
                <div onClick={() => router.push('/call')} className='flex cursor-pointer font-noto rounded-[10px] h-15 w-50 text-center font-medium mb-5 bg-[#A77300] mt-[10px] p-2'>
                  <div className=' justify-center text-white text-15'>Add Schedule</div>
                </div>
              )}
              {me?.role == "User" && (
                <div onClick={() => router.push('/call')} className='flex cursor-pointer font-noto rounded-[10px] h-15 w-50 text-center font-medium mb-5 bg-[#A77300] mt-[10px] p-2'>
                  <div className=' justify-center text-white text-15'>Add Campaign</div>
                </div>
              )}

            </div>
            <div className='flex -mt-[40px] mr-12 w-full'>
              <div className='text-right text-[#817C7C] text-[14px] mb-10 ml-auto'><u>Ratings & Reviews</u></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile