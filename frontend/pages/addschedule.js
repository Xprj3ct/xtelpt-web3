import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { XContext } from '../context/XContext';
import { ethers } from 'ethers';

const Addschedule = () => {
  const { xtelptAddress, abi } = useContext(XContext)
  const [value, onChange] = useState(new Date());
  const router = useRouter()

  const [desc, setDesc] = useState("")



  const handleCreate = async () => {

    console.log("started")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, signer)

    try {
      const createSchedule = await xtelptContract.createSchedule(1, 0, desc)
      router.push('/viewSchedule')
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div className='bg-[#252525]'>
      <div className='bg-hero bg-right w-full bg-no-repeat flex h-screen'>
        <div className=' flex-1'>
          <div className='text-[32px] justify-center mt-32 flex font-noto text-green-400 font-semibold'>Set Availability time.</div>
          <div className='flex justify-center mt-10 h-12 font-bold text-white'> <text className='pr-4 mt-2'> Date & Time: </text>
            <div className='w-80 h-12 rounded-[12px] border-4  text-black flex bg-blue-200 self-center pl-10' > <input className=' outline-none bg-transparent' type="datetime-local" id="Test_DatetimeLocal" /> </div>
          </div>
          <div className='pl-2 flex justify-center' >
            <input onChange={(e) => setDesc(e.target.value)} className='w-[426px] h-[50px] bg-transparent mt-10 text-white rounded-[12px] border-2 pl-2' placeholder='Description' /></div>
          <div className='pr-64 flex justify-center cursor-pointer' onClick={handleCreate} title='Multiple schedule can be created' ><text className='font-noto bg-[#755204] text-[14px] mt-10 h-[41px] rounded-[12px] cursor-pointer pt-2.5 pl-3 w-[150px] text-white' > Create Schedule </text>
          </div>
          <div onClick={() => router.push('/viewSchedule')} className='flex cursor-pointer justify-center pl-72 text-red-600' title='Check created schedule'> <u>Checkschedule</u> </div>
        </div>
      </div>
    </div >
  )
}

export default Addschedule