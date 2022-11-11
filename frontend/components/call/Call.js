import Image from 'next/image'
import Profile from '../../assets/profle-p.png'
import Notification from '../../container/notification'
import { BsMicFill } from 'react-icons/bs'
import { MdAddReaction } from 'react-icons/md'
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
  const huddleClient = getHuddleClient(router.query.addr);
  const stream = useRootStore((state) => state.stream);
  const enableStream = useRootStore((state) => state.enableStream);
  const pauseTracks = useRootStore((state) => state.pauseTracks);
  const isCamPaused = useRootStore((state) => state.isCamPaused);
  const peers = useRootStore((state) => state.peers);
  const peerId = useRootStore((state) => state.peerId);
  const lobbyPeers = useRootStore((state) => state.lobbyPeers);
  const roomState = useRootStore((state) => state.roomState);
  const meetingRoom = "Mena"

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
          <h2 className={`text-${!roomState.joined ? "red" : "green"}`}>
            Room Joined:&nbsp;{roomState.joined.toString()}
          </h2>
          {lobbyPeers[0] && <h2>Lobby Peers</h2>}
          <div>
            {lobbyPeers.map((peer) => (
              <div>{peer.peerId}</div>
            ))}
          </div>
          {Object.values(peers)[0] && <h2>Peers</h2>}

          <div className="peers-grid">
            {Object.values(peers).map((peer) => (
              <PeerVideoAudioElem peerIdAtIndex={peer.peerId} />
            ))}
          </div>
          <div className='flex justify-center items-center mb-[11px] w-full '>
            <div className='w-[274px] flex h-[276px] rounded-full bg-[#D9D9D940]'>
              <div className='w-[252px] flex h-[258px] ml-[12px] mt-2 rounded-full bg-[#252525]'>
                <div className='w-[228px] flex h-[236px] ml-[12px] mt-3 rounded-full bg-[#D9D9D9BF]'>
                  <div className='pt-1 pl-[6px] '>
                    <Image src={Profile} height={225} width={214} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom-0 bg-[#755204] rounded-[10px] place-items-center h-[70px] w-[995px]'>
            <div className='flex py-5 w-full justify-center'>
              <div className="card">
                <button onClick={handleJoin}>Join Room</button>
                <button onClick={() => enableStream()}>Enable Stream</button>
                <button onClick={() => pauseTracks()}>Disable Stream</button>
                {/* <button onClick={() => huddleClient.enableWebcam()}>
              Enable Webcam
            </button> */}
                {/* <button onClick={() => huddleClient.disableWebcam()}>
              Disable Webcam
            </button> */}
                <button onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}>
                  Allow Client
                </button>
              </div>
              <BsMicFill className='text-[#ACACAC] mr-2 h-8 w-8' />
              <Notification />
              <MdAddReaction className='text-[#ACACAC] ml-2 h-8 w-8' />
            </div>
          </div>
        </div>
      </div>
    </HuddleClientProvider>
  )
}

export default Call