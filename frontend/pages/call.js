import React from 'react'
import Header from '../components/home/header'
import Host from '../components/hosts/Host'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Call from '../components/Call'


const call = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>XTELPT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#252525] h-full w-full flex-1'>
       <Header/>
       <Call />
      </div>
      </div>
  )
}

export default call