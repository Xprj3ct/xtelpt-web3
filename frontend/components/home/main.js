import React, { useState } from 'react'
import Image from 'next/image'
import HeroIcon from '../../assets/3d 1.png'
import LineA from '../../assets/Line 1.png'
import LineB from '../../assets/Line 2.png'
import Group9 from '../../assets/Group 9.png'
import Phone from '../../assets/Antigravity.png'

const Main = () => {
    const [close, setClose] = useState(true)

    return (
        <div className='flex w-full overflow-y-hidden' >
            <div className='main-not w-full'>
                <div id="alert-1" className={`flex ${!close && "hidden"} p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200`} role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-lg font-medium text-blue-700 dark:text-blue-800">
                        Info
                    </div>

                    <div className="text-xl mt-10 font-medium text-blue-700 dark:text-blue-800">
                        Switch To Desktop For Better Experience
                    </div>
                    <button type="button" onClick={() => setClose(false)} className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg aria-hidden="true" className="w-8 h-8 font-bold text-xl" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <div className='flex-1 bg-hero bg-bottom bg-no-repeat'>
                <div className='absolute items-center w-full flex justify-center pt-[100px]'>

                    <Image src={HeroIcon} height={363} width={330} />
                </div>
                <div className='mt-[250px] w-full text-center h-[550px] bg-[#D9D9D9] text-[50px]'>
                    <div className='font-bungee text-[65px] text-red-800 pt-[300px]'>You, The blockchain and the End user</div>
                    <div className=' text-black text-[24px] '>Getting mental health care anywhere at anytime at 100% confidentiality</div>
                </div>
                <div className='text-[#FFFFFF] text-[32px] text-center w-full leading-[250px] font-noto'>X-Stealth-Pronounciation</div>
                <div className=' w-full text-center'>
                    <Image src={Group9} width={147} height={43} />
                </div>
                <div className='grid place-items-center w-full mt-[26px] flex-1'>
                    <div className='bg-[#2D1300] w-[815px] h-[503px] pl-4 pr-4 text-center shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] flex-col rounded-[60px] '>
                        <div className='w-full text-center'>
                            <Image src={Phone} height={210} width={220} />
                        </div>
                        <div className='font-noto text-[40px] text-white'>*Privacy:*</div>
                        <div className='font-noto text-[18px] h-[200] pt-10 text-white '>100% confidentiality is been secured from hosts to users on the network guaranteeing trust on disclosure of information</div>
                    </div>
                    <div className='bg-[#2D1300] w-[815px] text-center pl-4 pr-4 mt-10 h-[503px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] flex-col rounded-[60px] '>
                        <div className='w-full text-center'>
                            <Image src={Phone} height={210} width={220} />
                        </div>
                        <div className='font-noto text-[40px] text-white'>*Campaigns:*</div>
                        <div className='font-noto text-[18px] h-[200] pt-10 text-white '>Free campaigns hosted on different mental health issues, making it safe for those that can't afford the fee of a host</div>
                    </div>
                    <div className='bg-[#2D1300] w-[815px] mt-10 h-[503px] pl-4 pr-4 text-center shadow-[0_6px_10px_4px_rgba(0,0,0,0.5)] flex-col rounded-[60px] '>
                        <div className='w-full text-center'>
                            <Image src={Phone} height={210} width={220} />
                        </div>
                        <div className='font-noto text-[40px] text-white'>*Services range:*</div>
                        <div className='font-noto text-[18px] h-[200] pt-10 text-white '>On XTELPT there is a wide range of services that are offered as services by different host from any part of the world at anytime.</div>
                    </div>
                </div>
                <div className='w-full mt-[70px]'>
                    <div className='flex justify-between px-[40px] w-full'>
                        <div className='border-b-[2px]  w-[328px] border-[#000000]'></div>
                        <div className='font-bungee text-[34px]  text-white'>How it works</div>
                        <div className='border-b-[2px]  w-[328px] border-[#000000]'></div>
                    </div>
                    <div className='flex w-100 justify-between p-20'>
                        <div className='bg-[#2D1300] mt-[76px] rounded-[30px] w-1/4 h-[273px]'>
                            <div className='font-noto text-[30px] pt-6 mb-4 text-center text-white'>CAMPAIGNS</div>
                            <div className='text-[18px] font-noto text-center text-white'>Explanations on the reason and the benefits our services provides</div>
                        </div>
                        <div className='bg-[#2D1300] mt-[76px] rounded-[30px] w-1/4 h-[273px]'>
                            <div className='font-noto text-[30px] pt-6 mb-4 text-center text-white'>HOSTS</div>
                            <div className='text-[18px] font-noto text-center  text-white'>Explanations on the reason and the benefits our services provides</div>
                        </div>
                        <div className='bg-[#2D1300] mt-[76px] rounded-[30px] w-1/4 h-[273px]'>
                            <div className='font-noto text-[30px] pt-6 mb-4 text-center text-white'>USERS</div>
                            <div className='text-[18px] font-noto  text-center text-white'>Explanations on the reason and the benefits our services provides</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main