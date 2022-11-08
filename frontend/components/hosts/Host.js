import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Ellipse from '../../assets/Ellipse 2.png'
import Search from '../../assets/Vector.png'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { XContext } from '../../context/XContext'

const Host = () => {
  const router = useRouter()

  const { xtelptAddress, abi } = useContext(XContext)

  const [host, setHost] = useState()
  const [text, setText] = useState("")

  const updateUIValues = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, provider)

    const allHost = await xtelptContract.getAllAccount()
    console.log(allHost)

    let arr = []

    for (let i = 0; i < allHost.length; i++) {
      let prof = await xtelptContract.getProfile(allHost[i])
      if (prof.role == "Host") {
        arr.push(prof)
      }
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
    setTimeout(() => {
      updateUIValues()
    }, 1000);
  }, [])

  return (
    <div>
      <div className='w-full bg-hero bg-left-4 bg-no-repeat flex-1'>
        <div className='font-bungee text-[34px] leading-[250px] flex  justify-between text-white pl-[286px]'>
          <div>TOP HOSTS:</div>
          <div className='mt-[100px] mr-[204px]'>
            <div className='rounded-[12px] w-[154px] leading-[26px] pt-[6px] flex-auto text-[16px] border-[#EAEDEE] pl-[12px] h-[40px] bg-transparent border-[2px]'>
              <input type="search" placeholder='Search' className='bg-transparent font-sans w-[110px] outline-none h-[16px] ' />
              <Image src={Search} height={15} width={15} className='mt-2 cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='grid place-items-center w-full'>
          <div className='flex px-[265px] w-full justify-between pb-40'>
            {host?.map((item) => (
              <div key={item.addr} onClick={() => router.push('/call/mena')} className='bg-[#2D1300] w-[350px] cursor-pointer h-[250px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
                <div className='grid place-items-center mt-10 w-full'>
                  <Image src={`https://gateway.pinata.cloud/ipfs/${item.profilePic}`} className="rounded-full" height={70} width={70} />
                  <div className='font-bungee text-white mt-4'>{item.name}</div>
                  <div className='font-noto font-semibold text-white leading-[14px] text-[8px]'>
                    {item.addr.slice(0, 8
                    )}...
                  </div>
                  <div className='flex font-noto font-semibold mt-[10px] leading-[14px] text-[14px]'>
                    <div className='text-white'>{item.role}   </div>
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
          {/* <div className='flex px-[265px] mb-[67px] mt-[58px] w-full justify-between'>
            <div onClick={() => router.push('/call')} className='bg-[#2D1300] w-[350px] cursor-pointer h-[250px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
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
            <div onClick={() => router.push('/call')} className='bg-[#2D1300] w-[350px] cursor-pointer h-[250px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
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
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Host