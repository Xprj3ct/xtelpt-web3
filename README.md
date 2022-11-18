![cover](./smart-contract/images/xtelptimg.jpeg)
 
<p align="center">
<a target="_blank" href="https://docs.soliditylang.org/"><img src="https://camo.githubusercontent.com/7f5dae68cf75e9fb9eb72a0209fffc19ae14175eb0073f7659ffee06b9656ac4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536f6c69646974792d2532333336333633362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d736f6c6964697479266c6f676f436f6c6f723d7768697465"/></a> <a target="_blank" href="https://docs.chain.link/"><img src="https://camo.githubusercontent.com/df9365ae11c1678020c68db521a0a98522be0c065151e720e9ec4cf7624def50/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436861696e6c696e6b2d3337354244323f7374796c653d666f722d7468652d6261646765266c6f676f3d436861696e6c696e6b266c6f676f436f6c6f723d7768697465" /></a><a target="_blank" href="https://nextjs.org/docs/getting-started"><img src="https://img.shields.io/badge/NextJS-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000"/></a?

</p>
<p align="center">
  This repository contains the <strong>Smart contract</strong> source code written <b>Solidity</b>, The <strong>Frontend</strong> written in <b>NextJS</b> a Javascript Framework.
  Xtelpt is about Getting mental health care anywhere at anytime at 100% confidentiality.
</p>

<p align="center">
<a href="#Frameworks & API's">Frameworks and APis</a> &nbsp;&bull;&nbsp;
<a href="#usage">Usage</a> &nbsp;&bull;&nbsp;
<a href="#issues">Issues?</a>&nbsp;&bull;&nbsp;
<a href="#documentation">Lesson and Remarks</a> &nbsp;&bull;&nbsp;
</p>

> **Note**
> Refer to the ```Frontend``` & ```Smart Contract``` Folder ReadME, for specific tools usage.

# Frameworks & API's
This <b>Project</b> was made possible with ```solidity```, ```hardhat```, ```chainlink```, ```quicknode```, ```IPFS```, ```NextJS```, ```HUDDLE01```, ```Polygon```, ```Git```, ```Chai```, ```EtherJS```, and ```Figma```. It's has features such as:

- ```Chainlink Automation```: Was used to call the end schedule function which is to be called every 24hours we made use of the Time based trigger cron jobs on the chainlink automation interface
Here is [link](https://automation.chain.link/mumbai/70900495728458583747083971780494625056575569558419502594231042870192427479799) to the chainlink automation:
- ```IPFS```: Made use of pinata Ipfs API using file storage to save profile images and return a cid key in other to store on the Blockchain so I can retrieve the image at anytime for the account profile.
- ```QuickNode```:  To help deploy my smart contract using the Polygon Mumbai test net on the blockchain, it is reliable scalable and work across all major blockchains.
- ```Polygon```: Built on Polygon Chain.
- Creating of user or in this case a client profile.
- Creating of a host or doctors profile.
- Ability for a host to create a meeting and a user to enter the meeting.
- Becoming a volunteer for a campaign.
- Add profile name, pictures, bio and profession.
- A Decentralized WEBRTC for calls.
- Notification.
- Creating Schedules for Hosts.
- Campaign can only be added through the contract.

### LINKS 
[Live Deployed](https://xtelpt-web3.vercel.app/) <br/>
[Contract](https://mumbai.polygonscan.com/address/0x47FB47a5136d40c55E591CA87963Aeb700f999de)
> **Note**
> Wallet must be Connected to access any feature.
> Currently on ```Mumbai Faucet```.

## Usage
### How it works for Host:<br/>
- On opening of XTELPT and connecting of wallet, toggle on the host button to become a host while signing up.
- Edit your profile based on your professionalism.
- Set Schedule based on your preferred time and fee.
- Voluteer as a host on campaign(non-paid service)
- Get all meeting schedule on the notification bar, wait for time and click on it and start meeting.

### How Campaign Works:<br/>
- Navigate to campaign at the top bar and click on it.
- Search for specifics campaign or scroll down and click Get Help.
- The system automatically merges you with a Host and a call link will be in your notification.
- click and wait for prompts.

### Incoming Community Feature:<br/>
- xtelpt is enacting a reward gifting system for uncoerced individuals for being in stilt to others and sharing remedies for them in times of need in the community , xtelpt communites will serve as a trestle for mental health awareness programs where individuals can obliterate self-stigmatization, learning from previous experiences and getting to see ratified solutions of near same problem they are facing.


## Issues
- Some of the packages we felt were ```NextJS``` fit for the project were depreciated versions so we had to stress a little in finding other best packages
- Creating a custom room for different peers - With the help of the ```Huddle01``` docs we were able to overcome this challenge by creating a separate roomId prop for best usage.
- Trying to do the custom logic ```Chainlink keepers automation```, which was later swapped out for time based logic automation as it was what we needed.
- Return a mapping in ```solidity```, which I finally resolved to return a struct.
- Verifying my smart contract where I could not paste a code if I import a library as a single file.
- ```Ethers``` as when I reload a page I get "INVALID address ENS name error" which was fixed by properly using the useeffect.

## Lesson and Remarks 
- Proper use of ```for loop``` in ```solidity```.
- Usage of ```keccak256 solidity hashing``` to compare string in ```solidity```.
- Usage of ```EthersJS``` to interact with smart contract which include reading and writing, items like signers and providers.
- Custom hooks in ```NextJS```.
- Keeping track of States and manipulating them to get Best UI flow.
- Creating a Dynamic url in ```NextJs```.
