import React, { useContext, useEffect, useState } from 'react'
import moment from "moment"
import { useRouter } from 'next/router'
import { XContext } from '../context/XContext';
import { ethers, utils } from 'ethers'

const Checkschedule = () => {
  const router = useRouter()
  const hostAccount = router.query.addr


  const { xtelptAddress, abi, me } = useContext(XContext)

  const [meeting, setMeeting] = useState()
  const [loading, setLoading] = useState(false)

  const updateUIValues = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, provider)

    // const allMeeting = await xtelptContract.getAllAccount()
    // console.log(allMeeting)

    let arr = []

    const acct = router.query.addr
    if (acct) {
      let prof = await xtelptContract.getMeeting(acct)
      console.log("Prf", prof)

      if (!prof.booked) {
        arr.push(prof)
      }
    }





    if (arr.length > 0) {
      setMeeting(arr)
    }

    console.log(meeting)

  }

  const handleCreate = async (host, id, fee) => {
    setLoading(true)
    console.log("started")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, signer)

    try {
      const joinMeeting = await xtelptContract.joinMeeting(hostAccount, id, { value: fee })

      router.push({
        pathname: '/hostprofile',
        query: { addr: addr },
      })
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      updateUIValues()
    }, 1000);
  }, [hostAccount])

  return (

    <div className='w-full h-vh bg-hero bg-right bg-no-repeat flex-1'>
      <div className='font-bungee text-[34px] leading-[250px] flex text-white pl-[286px]'>
        <div>Schedules:</div>
      </div>
      <div className='place-items-center h-full w-full'>
        {meeting?.map((hostMeeting) => hostMeeting.map((item) =>
        (
          <div key={`${item?.index}`} className='flex justify-center pb-10 w-full '>
            <div className='bg-[#2D1300] w-1/2 h-full shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] rounded-[30px] '>
              <div className='flex justify-between p-6 '>
                <div className='justify-start pl-6 font-noto font-semibold text-[#817C7C] w-34 text-12'>{moment.unix(item?.start).format("HH:mmA")} - {moment.unix(item?.end).format("HH:mmA")}
                </div>
                <div className='justify-center items-center'><p className='justify-center text-12 text-red-400'>{item?.desc}</p></div>
                <div className='justify-center items-center'> <p className='justify-center text-12 text-[#817C7C]'>{ethers.utils.formatEther(item?.fee)} Matic</p></div>
                <div className=' items-center pr-7 justify-end'>
                  {me?.role == "User" ?
                    <div onClick={() => handleCreate(item?.host, item?.index, item?.fee)} className={`text-white  cursor-pointer font-noto rounded-[10px] h-[40px] w-[140px] text-center font-semibold bg-green-600  py-2 pl-5  text-[14px]`}>
                      {loading ? "Loading ..." : "Book Session"}
                    </div>
                    :
                    <div className={`text-white disabled:opacity-70 bg-gray-700 font-noto rounded-[10px] h-[40px] w-[140px] text-center font-semibold py-2 pl-5  text-[14px]`}>
                      {loading ? "Loading ..." : "Book Session"}
                    </div>
                  }
                </div></div>
            </div>
          </div>
        )

        ))}
      </div>
    </div>

  )
}


export default Checkschedule