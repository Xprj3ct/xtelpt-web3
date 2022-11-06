import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProfileImage from '../../assets/2.png'
import Ellipse from '../../assets/Ellipse 2.png'
import Search from '../../assets/Vector.png'
import { useRouter } from 'next/router'
import { abi, contractAddresses } from '../../constants'
import { ethers } from 'ethers'
// import { useMoralis, useWeb3Contract } from 'react-moralis'


const Host = () => {
  const router = useRouter()
  const [host, setHost] = useState()
  const [text, setText] = useState("")

  const xtelptAddress = "0x25f2aebcbb530579354fa7b46413f65a6B6Fdb7B"


  const updateUIValues = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, provider)


    const allHost = await xtelptContract.getAllHost()

    let arr = []

    for (let i = 0; i < allHost.length; i++) {
      let prof = await xtelptContract.getProfile(allHost[i])
      arr.push(prof)
    }

    if (arr.length > 0) {
      setHost(arr)
    }

    console.log(host)


  }

  const searchHost = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, provider)
    const prof = await xtelptContract.getProfile(text)

    console.log(prof)
  }

  useEffect(() => {

    updateUIValues()
  }, [])


  return (
    <div>
      <div className='w-full bg-hero bg-left-4 bg-no-repeat flex-1'>
        <div className='font-bungee text-[34px] leading-[250px] flex  justify-between text-white pl-[286px]'>
          <div>TOP HOSTS:</div>
          <div className='mt-[100px] mr-[204px]'>
            <div className='rounded-[12px] w-[154px] leading-[26px] pt-[6px] flex-auto text-[16px] border-[#EAEDEE] pl-[12px] h-[40px] bg-transparent border-[2px]'>

              <input type="search" onChange={(e) => setText(e.target.value)} placeholder='Search' className='bg-transparent font-sans w-[110px] outline-none h-[16px] ' />
              <button onClick={searchHost}>Submit</button>
              <Image src={Search} height={15} width={15} className='mt-2' />

            </div>
          </div>
        </div>
        <div className='grid place-items-center w-full'>
          <div className='flex px-[50px] w-full justify-between'>

            {host?.map((item) => (
              <div onClick={() => router.push('/call')} className='bg-[#2D1300] w-1/3 cursor-pointer h-[350px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-16 w-full'>
                  <Image src={ProfileImage} height={54} width={55} />
                  <div className='font-bungee text-white'>{item.name}</div>
                  <div className='font-noto font-semibold text-white leading-[14px] text-[8px]'>
                    {item.addr.slice(0, 5
                    )}...{item.addr.slice(item.addr.length - 4)}
                  </div>
                  <div className='flex font-noto font-semibold mt-[10px] leading-[14px] text-[14px]'>
                    <div className='text-white'>{item.role}  </div>
                    <div className='w-[5px] h-[5px] -mt-[2px]'>
                      <Image src={Ellipse} className='h-[5px] text-[#D9D9D9] w-[5px]' height={5} width={5} />
                    </div>
                    <div className='text-white'>  Therapist</div>
                  </div>
                  <div className='text-[10px] leading-[14px] mt-[15px] text-[#817C7C]'>{item.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Host