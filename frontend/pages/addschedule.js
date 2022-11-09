import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { XContext } from '../context/XContext';
import { ethers } from 'ethers';

const Addschedule = () => {
  const { xtelptAddress, abi } = useContext(XContext)
  const [datetime, setDatetime] = useState()

  const router = useRouter()

  const [desc, setDesc] = useState("")
  const [dura, setDura] = useState()



  const handleCreate = async () => {
    const date = +new Date(datetime)
    console.log(date)

    const start = Math.round(date / 1000)

    const dur = +new Date(dura)
    console.log(dur)

    const end = Math.round(dur / 1000)

    const intr = Math.abs((start - end) / 60);

    console.log(intr)

    console.log("started")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, signer)

    try {
      const createSchedule = await xtelptContract.createSchedule(start, intr, 0, desc)

    } catch (error) {
      console.log(error)
      return
    }

    router.push('/viewSchedule')

  }



  return (
    <div className='bg-[#252525]'>
      <div className='bg-hero bg-right w-full bg-no-repeat flex h-screen '>
        <div className=' flex-1'>
          <div className='text-[32px] justify-center mt-32 flex font-noto text-green-400 font-semibold'>Set Availability time.</div>
          <div className='flex justify-center mt-10 h-12 font-bold text-white'> <text className='pr-4 mt-2'> Date & Time: </text>
            <div className='w-60 h-12 rounded-[12px] border-4  text-black flex bg-blue-200 self-center' >
              <input className='outline-none bg-transparent' onChange={(e) => setDatetime(e.target.value)} type="datetime-local" id="Test_timeLocal" />
            </div><p className=' p-4 mb-5 font-bold text-white'> - </p>
            <div className='w-60 h-12 rounded-[12px] border-4  text-black flex bg-blue-200 self-center' >
              <input className=' outline-none bg-transparent' onChange={(e) => setDura(e.target.value)} type="datetime-local" id="Test_timeLocal" />
            </div></div>

          <div className='pl-2 flex justify-center' >
            <input onChange={(e) => setDesc(e.target.value)} type="text" className='w-[426px] h-[50px] bg-transparent mt-10 text-white rounded-[12px] border-2 pl-2' placeholder='Description' /></div>
          <div className='pr-64 flex justify-center' onClick={handleCreate} title='Multiple schedule can be created' ><p className='font-noto bg-[#755204] cursor-pointer text-[14px] mt-10 h-[41px] rounded-[12px] pt-2.5 pl-3 w-[150px] text-white' > Create Schedule </p>
          </div>
          <div onClick={() => router.push('/viewSchedule')} className='flex justify-center cursor-pointer pl-72 text-red-600' title='Check created schedule'> <u>Checkschedule</u> </div>
        </div>
      </div>
    </div>

  )
}

export default Addschedule