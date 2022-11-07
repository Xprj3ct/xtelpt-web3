import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { abi } from '../constants'
import { ethers } from 'ethers'

export const XContext = createContext()

export const XProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [me, setMe] = useState()

  const router = useRouter()

  const xtelptAddress = "0x7aD928627634055f32129C1bf22AB689006EF293"


  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])


  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        // router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      // router.push('/')
      setAppStatus('error')
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        // router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }


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
        console.log(me)
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
    }, 300);
  }, [])




  return (
    <XContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectWallet,
        setAppStatus,
        xtelptAddress,
        abi,
        me
      }}
    >
      {children}
    </XContext.Provider>
  )
}
