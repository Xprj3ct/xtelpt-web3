import Image from 'next/image'
import Profile from '../../assets/profle-p.png'
import Notification from '../../container/notification'
import { BsMicFill, BsSoundwave } from 'react-icons/bs'
import { MdAddReaction, MdCall } from 'react-icons/md'
import React, { useEffect, useContext, useRef, useState } from "react";
import { XContext } from "../../context/XContext";
import {
  HuddleClientProvider,
  getHuddleClient,
  useRootStore,
} from "@huddle01/huddle01-client";
import PeerVideoAudioElem from "./PeerVideoAudioElem";
import { useRouter } from 'next/router'

const Call = () => {
  const router = useRouter()
  console.log(router.query.clientKey);

  const { currentAccount } = useContext(XContext)
  const huddleClient = getHuddleClient("i4pzqbpxza8vpijQMwZsP1H7nZZEHOTN3vR4NdNS");
  const stream = useRootStore((state) => state.stream);
  const enableStream = useRootStore((state) => state.enableStream);
  const pauseTracks = useRootStore((state) => state.pauseTracks);
  const isCamPaused = useRootStore((state) => state.isCamPaused);
  const peers = useRootStore((state) => state.peers);
  const peerId = useRootStore((state) => state.peerId);
  const lobbyPeers = useRootStore((state) => state.lobbyPeers);
  const roomState = useRootStore((state) => state.roomState);
  const meetingRoom = router.query.addr

  const handleJoin = async () => {
    try {
      await huddleClient.join(meetingRoom, {
        address: { currentAccount },
        wallet: "",
        ens: "axit.eth",
      });
      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    console.log({ peers: Object.values(peers), peerId, isCamPaused });
  }, [peers, peerId, isCamPaused]);

  return (
    <HuddleClientProvider value={huddleClient}>
      <div className='w-full h-screen bg-hero bg-right-bottom bg-no-repeat flex-1'>
        {/* <div className='font-bungee text-[34px] leading-[250px] flex  justify-between text-white pl-[286px]'>
     <div>CAMPAIGNS:</div>
    
   </div> */}
        <div className='grid place-items-center  h-full w-full'>
          <div className="peers-grid">
            {Object.values(peers).map((peer) => (
              <PeerVideoAudioElem peerIdAtIndex={peer.peerId} />
            ))}
          </div>
          <div className='flex justify-center -mt-12 items-center mb-[11px] w-full '>
            <div className='w-[274px] flex h-[276px] rounded-full bg-[#D9D9D940]'>
              <div className='w-[252px] flex h-[258px] ml-[12px] mt-2 rounded-full bg-[#252525]'>
                <div className='w-[228px] flex h-[236px] ml-[12px] mt-3 rounded-full bg-[#D9D9D9BF]'>
                  <div className='pt-1 pl-[6px] '>
                    <Image src={Profile} className='rounded-full' height={225} width={214} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!roomState.joined ? <div className='font-bungee -mt-12 text-[20px] text-red-700'> Meeting Room is Open</div> : <div className='font-bungee -mt-28 text-[20px] text-green-500'>Meeting Room is Closed</div>}
          {/* <h2 className={`text-${!roomState.joined ? "red" : "green"}`}>
            Meeting Room is now Opened:&nbsp;{roomState.joined.toString()}
          </h2> */}
          {/* 
          <div>
          </div>\\
          {Object.values(peers)[0] && <h2>Peers</h2>} */}
          <div className='bottom-0 bg-[#755204] -mt-36 rounded-[10px] place-items-center h-[50px] w-5/6'>
            <div className='flex py-4 w-full  justify-center'>
              {/* <div className="card">
            <button >Join Room</button>
            <button >Enable Stream</button>
            <button >Disable Stream</button>
            <button onClick={() => huddleClient.enableWebcam()}>
              Enable Webcam
            </button>
            <button onClick={() => huddleClient.disableWebcam()}>
              Disable Webcam
            </button>
            <button >
              Allow Client
            </button>
          </div> */}
              <BsSoundwave className='text-[#ACACAC] mr-7 cursor-pointer h-6 w-6' title='Enables stream for connection' onClick={() => enableStream()} />
              <BsMicFill onClick={handleJoin} title="Opens a meeting room " className='text-[#ACACAC] cursor-pointer mr-7 h-6 w-6' />
              {/* <div className='mr-7'>
            <Notification /></div> */}
              <MdAddReaction onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()} title="Allow peer" className='text-[#ACACAC] cursor-pointer mr-7 h-6 w-6' />
              <MdCall className='text-[#755204] ml-20 bg-black rounded-full border-2 border-black cursor-pointer h-8 w-8 ' title='End call' onClick={() => pauseTracks()} />
            </div>
          </div>
        </div>
      </div>
    </HuddleClientProvider>
  )
}

export default Call