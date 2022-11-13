import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import ProfileImage from '../../assets/profle-p.png'
import { BsPlus } from 'react-icons/bs'
import NewModal from '../../container/newModal'
import { useRouter } from 'next/router'
import { abi } from '../../constants'
import { ethers } from 'ethers'
import { XContext } from '../../context/XContext'

const Campaigns = () => {
  const router = useRouter()
  const { xtelptAddress, me } = useContext(XContext)
  console.log(me)

  const [campaign, setCampaign] = useState()
  const [loading, setLoading] = useState(false)

  const updateUIValues = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, provider)

    const allCampaign = await xtelptContract.getCampaign()

    console.log(allCampaign)

    setCampaign(allCampaign)
  }

  const handleVolun = async (id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, signer)

    try {
      const joinCampaign = await xtelptContract.joinCampaign(id)
      console.log(joinCampaign)
    } catch (error) {
      console.log(error)
    }
  }

  const handleHelp = async (id) => {
    setLoading(true)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, signer)

    try {
      const getHelp = await xtelptContract.getHelp(id)
      console.log(getHelp)

      router.push({
        pathname: '/call',
        query: { addr: me?.addr },
      })

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      updateUIValues()
    }, 1000);
  }, [])

  return (
    <div className='w-full h-full bg-hero bg-right bg-no-repeat flex-1'>
      <div className='font-bungee text-[34px] leading-[250px] flex  justify-between text-white pl-[286px]'>
        <div>CAMPAIGNS:</div>
        <div className='mt-[100px] flex mr-[204px]'>
          <BsPlus className='text-[#A77300]' />
          <div className='rounded-[12px] w-[154px] cursor-pointer leading-[26px] pt-[6px] flex-auto text-[16px] border-[#EAEDEE] pl-[12px] h-[40px] bg-transparent border-[2px]'>
            <input type="search" placeholder='Search' className='bg-transparent font-sans  w-[110px] outline-none h-[16px] ' />
            <div className='-mt-5 ml-28'>
              <NewModal /></div>
          </div>
        </div>
      </div>
      <div className='place-items-center h-vh w-full'>
        {campaign?.map((item) => {
          return (
            <div key={item?.start_time} className='flex grid justify-center w-full '>
              <div className='bg-[#2D1300] w-[600px] h-[400px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] mb-14 rounded-[30px] '>
                <div className='grid place-items-center mt-8 w-full'>
                  <Image src={`https://gateway.pinata.cloud/ipfs/${item.image}`} height={150} width={142.67} />
                  <div className='font-bungee text-[24px] mt-2 text-white'>{item?.name.slice(0, 20)}</div>
                  <div className='font-noto text-center font-semibold text-[#817C7C] leading-[14px] mt-4 text-[16px]'>{item?.desc}</div>
                  <div className='flex items-center w-full justify-center mt-[32px]'>
                    {me?.role == "User" && (
                      <div onClick={() => handleHelp(item?.index)} className={`flex text-white cursor-pointer ${item?.volunteer.length == 0 && ('disabled:opacity-70 bg-gray-700')} font-noto rounded-[10px] h-[40px] w-[114px] text-center font-semibold bg-[#A77300] mt-[10px] py-2 pl-[16px] text-[16px]`}>
                        {loading ? "Loading ..." : "Get Help"}
                      </div>
                    )}
                    {/* <div className='text-right flex'>Voluteer</div> */}
                  </div>
                </div>
                {me?.role == "Host" && (
                  <div className='flex items-center w-full justify-center mt-[32px]'>
                    <div className='flex text-white cursor-pointer font-noto rounded-[10px] h-[40px] w-[114px] text-center font-semibold bg-green-700 hover:bg-gray-500 py-2 pl-[16px] text-[16px]' onClick={() => handleVolun(item?.index)}>Voluteer</div>
                  </div>
                )}

              </div>

            </div>
          )

        }
        )}
      </div>
    </div>
  )
}

export default Campaigns