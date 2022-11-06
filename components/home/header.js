import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '../../assets/Logo.png'
import Notification from '../../container/notification';
import { useRouter } from "next/router";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";

const Header = () => {
  const router = useRouter()
  const [account, setAccount] = useState("")
  const { disconnect } = useDisconnect();


  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log(account)
    }
    // const connect = async () => {
    //   if (!account) {
    //     const { account, chain } = await connectAsync({
    //       connector: new MetaMaskConnector({}),
    //     });
    //     setAccount(account)
    //   }
    // }

    // connect()

  }, [account])

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const connectWallet = async (wal) => {
    if (typeof window.ethereum === 'undefined') {
      alert("No web3 Enabled")
    }

    if (isConnected) {
      await disconnectAsync();
    }

    console.log("Connect To Site Via Wallet");

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector({}),
    });
    setAccount(account)
    console.log(account)

  }


  return (
    <div className='w-full h-full flex'>
      <div className='px-[125px] flex w-full justify-between'>
        <div onClick={() => router.push('/')} className=' pt-[57px] cursor-pointer flex'>
          <Image src={Logo} height={48.75} width={100} />
        </div>
        <div className='flex pt-[72px] font-noto text-[16px] text-white'>
          <div onClick={() => router.push('/campaigns')} className='mr-[20px] cursor-pointer leading-[10px] '>CAMPAIGNS</div>
          <div onClick={() => router.push('/host')} className='mr-[20px] cursor-pointer leading-[10px] '>HOSTS</div>
          <div onClick={() => router.push('/host')} className='mr-[20px] cursor-pointer leading-[10px] '>NOTIFICATION</div>
          <div onClick={() => router.push('/host')} className='mr-[20px] cursor-pointer leading-[10px] '>FAQ</div>
        </div>
        {!account ? (
          <div onClick={() => connectWallet()} className='bg-[#A77300] text-[12px] font-noto cursor-pointer font-semibold py-3 mt-[57px] w-[120px] h-[40px] text-center rounded-[30px]'>CONNECT WALLET</div>
        ) : (
          <div onClick={() => disconnect()} className='bg-[#A77300] text-[12px] font-noto cursor-pointer font-semibold py-3 mt-[57px] w-[120px] h-[40px] text-center rounded-[30px]'>
            {account.slice(0, 5
            )}...{account.slice(account.length - 4)}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header