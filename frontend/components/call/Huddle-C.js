import React, { useEffect, useContext, useRef, useState } from "react";
import { XContext } from "../../context/XContext";
import {
  HuddleClientProvider,
  getHuddleClient,
  useRootStore,
} from "@huddle01/huddle01-client";
import PeerVideoAudioElem from "./PeerVideoAudioElem";
import HuddleI from "./Huddle-I";

const HuddleC = () => {
  const { connectWallet, appStatus, currentAccount } = useContext(XContext)
  const huddleClient = getHuddleClient("i4pzqbpxza8vpijQMwZsP1H7nZZEHOTN3vR4NdNS");
  const stream = useRootStore((state) => state.stream);
  const enableStream = useRootStore((state) => state.enableStream);
  const pauseTracks = useRootStore((state) => state.pauseTracks);
  const isCamPaused = useRootStore((state) => state.isCamPaused);
  const peers = useRootStore((state) => state.peers);
  const peerId = useRootStore((state) => state.peerId);
  const lobbyPeers = useRootStore((state) => state.lobbyPeers);
  const roomState = useRootStore((state) => state.roomState);


  console.log("Lobby Peers", lobbyPeers)

  const handleJoin = async () => {
    try {
      await huddleClient.join("dev ", {
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
      <div className="App grid grid-cols-2">
        <div>
          <h1>Vite + React</h1>

          <h2 className={`text-${!roomState.joined ? "red" : "green"}`}>
            Room Joined:&nbsp;{roomState.joined.toString()}
          </h2>
          <h2>Instructions</h2>
          <ol className="w-fit mx-auto text-left">
            <li>
              Click on <b>Enable Stream</b>
            </li>
            <li>
              Then Click on <b>Join room</b>, <i>"Room Joined"</i> should be
              changed to true
            </li>
            <li>
              Open the app in a <b>new tab</b> and repeat <b>steps 1 & 2</b>
            </li>
            <li>Return to 1st tab, now you'll see peers in the peer list,</li>
            <li>
              Click on <b>allowAllLobbyPeersToJoinRoom</b> to accept peers into
              the room.
            </li>
          </ol>
        </div>

        <div>
          <div className="card">
            <button onClick={handleJoin}>Join Room</button>
            <button onClick={() => enableStream()}>Enable Stream</button>
            <button onClick={() => pauseTracks()}>Disable Stream</button>
            <button onClick={() => huddleClient.enableWebcam()}>
              Enable Webcam
            </button>
            <button onClick={() => huddleClient.disableWebcam()}>
              Disable Webcam
            </button>
            <button onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}>
              allowAllLobbyPeersToJoinRoom()
            </button>
          </div>
          {!isCamPaused && (
            <video
              style={{ width: "50%" }}
              ref={videoRef}
              autoPlay
            // muted
            ></video>
          )}

          {/* <div><HuddleI/></div> */}

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
        </div>
      </div>
    </HuddleClientProvider>
  )
}

export default HuddleC