import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import ProfileImage from '../../assets/profile.png'
import { useRouter } from 'next/router'
import { XContext } from '../../context/XContext'
import { ethers } from 'ethers'
import axios from 'axios'
import FormData from 'form-data';

const Auth = () => {
  const { xtelptAddress, abi } = useContext(XContext)
  // console.log(xtelptAddress, abi)


  const router = useRouter()

  const [file, setFile] = useState()
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [ipfsHash, setIpfsHash] = useState('')


  const handleCreate = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const xtelptContract = new ethers.Contract(xtelptAddress, abi, signer)

    if (file) {
      console.log('starting')
      console.log(file)

      const formData = new FormData()

      formData.append("file", file)

      const API_KEY = "194b413d599fe41e79d5"
      const API_SECRET = "91668b71fc76cca7e55bcf83c9ecb6ce0e8a2c544da78fab6b76d444f0be7151"

      console.log(formData)
      console.log(API_KEY)
      console.log(API_SECRET)

      // the endpoint needed to upload the file
      const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`

      await axios.post(
        url,
        formData,
        {
          maxContentLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
            'pinata_api_key': API_KEY,
            'pinata_secret_api_key': API_SECRET

          }
        }
      )
        .then(async (response) => {
          console.log(response)
          setIpfsHash(response.data.IpfsHash)

          const createHost = await xtelptContract.createHost(0, name, response.data.IpfsHash, bio)

          console.log(createHost)
          router.push('/host')

        })
        .catch((err) => {
          console.log(err)
        })

      // get the hash

    } else {
      alert("SELECT A FILE")
      return
    }

  }

  return (
    <div className='bg-[#252525]'>
      <div className='bg-hero bg-right w-full bg-no-repeat flex h-screen'>
        <div className='grid w-full place-items-center  mb-20'>
          <div className='text-[32px] font-noto text-white font-semibold'>Edit Profile details</div>
          <Image src={ProfileImage} />
          <input type="file" onChange={(event) => setFile(event.target.files[0])} className='border-[#EAEDEE] rounded-[12px] w-[426px] py-2 px-2 h-[50px] border-2 text-white' accept="image/*" />
          <input onChange={(e) => setName(e.target.value)} className='w-[426px] h-[50px] bg-transparent rounded-[12px] border-2 pl-2 text-white' placeholder='Fullname' />
          <textarea onChange={(e) => setBio(e.target.value)} className='w-[426px] h-[221px] rounded-[12px] bg-transparent border-2 px-2 text-white' placeholder='Bio' />
          <div className='font-noto bg-[#755204] text-[14px] h-[41px] rounded-[12px] px-2 py-2 w-[150px] cursor-pointer text-white' onClick={handleCreate}>Create Profile</div>
        </div>
      </div>
    </div>
  )
}

export default Auth