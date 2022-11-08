import React from 'react'
import Image from 'next/image'
import Group8 from '../../assets/group_8.png'


const Footer = () => {
  return (
    <div className='flex-1 mt-[116px] bg-[#A77300] w-full'>
      <div className='flex justify-between'>
        <div className='bg-[#755204] h-[332px] w-[740px] px-[60px] text-center font-noto text-white'>
            <div className='mt-[37px] text-[30px]'>WHAT IS BLOCKCHAIN?</div>
            <div className='mt-[22px] text-[20px]'>A blockchain is a type of distributed ledger technology that consists of growing list of records, called blocks, that are securely linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data</div>
        </div>
        <div className='bg-[#A77300] self-center w-[10px]'></div>
        <div className='bg-[#755204] h-[332px] w-[740px] px-[60px] text-center font-noto text-white'>
            <div className='mt-[37px] text-[30px]'>WHY POLYGON?</div>
            <div className='mt-[22px] text-[20px]'>The Polygon Network’s three core upsides are;
<br/>
<br/>
<br/>
Capable of fully benefiting from Ethereum’s network effects
Inherently more secure
It is more open, yet powerful enough</div>
        </div>
      </div >
      <div className='text-center w-full items-center justify-center'>
      <div className='flex justify-between'>
        <div className='text-[128px] ml-[194px] font-noto'>XTELPT</div>
        <div className='mt-[33px] mr-[250px]'><Image src={Group8} height={108} width={113} /></div>
      </div>
      </div>
    </div>
  )
}

export default Footer