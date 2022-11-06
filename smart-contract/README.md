![cover](./images/xtelptimg.jpeg)
 
<p align="center">
<a target="_blank" href="https://docs.soliditylang.org/"><img src="https://camo.githubusercontent.com/7f5dae68cf75e9fb9eb72a0209fffc19ae14175eb0073f7659ffee06b9656ac4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536f6c69646974792d2532333336333633362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d736f6c6964697479266c6f676f436f6c6f723d7768697465"/></a> <a target="_blank" href="https://docs.chain.link/"><img src="https://camo.githubusercontent.com/df9365ae11c1678020c68db521a0a98522be0c065151e720e9ec4cf7624def50/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436861696e6c696e6b2d3337354244323f7374796c653d666f722d7468652d6261646765266c6f676f3d436861696e6c696e6b266c6f676f436f6c6f723d7768697465" /></a>

</p>
<p align="center">
  This repository contains the <strong>Solidity</strong> source code written with <b>hardhat</b> framework.
  Xtelpt is developed to ease the process of people taking therapy and to provide a safe, secure and decentralized method of therapy sessions.
</p>

<p align="center">
<a href="#introduction">Introduction</a> &nbsp;&bull;&nbsp;
<a href="#installation">Installation</a> &nbsp;&bull;&nbsp;
<a href="#usage">Usage</a> &nbsp;&bull;&nbsp;
<a href="#documentation">Documentation</a> &nbsp;&bull;&nbsp;
<a href="#issue">Issue?</a>
</p>

# Introduction
This <b>smart contract</b> was written with ```solidity```, ```hardhat```, ```chainlink``` and ```quicknode```. It's has features such as:

- Creating of user or in this case a patient profile.
- Creating of a host or doctor's profile.
- Ability for a host to crrate a meeting and a user to enter the meeting.
- Becoming a volunteer for a campaign.

## Installation
clone the repo
##### yarn
```
cd smart-contract
yarn
```
##### npm
```
cd smart-contract
npm install
```

## Usage
### How to deploy the smart contract:<br/>
```
yarn hardhat deploy --network mumbai
```

## Documentation
Multiple methods provide ways to interact with the XTELPT smart contract. Those are listed below in detail.

### 1. How to create a User profile
```
createUser(uint256 _rating, string memory _name, string memory _pic, string memory _bio);
```
This will create the a User profile using your public address which is the ```msg.sender```.
```_rating``` is a integer, while ```_name _pic _bio``` are string.

### 2. How to create a Host profile
```
createHost(uint256 _rating, string memory _name, string memory _pic, string memory _bio);
```
This will create the a Host profile using your public address which is the ```msg.sender```.
```_rating``` is a integer, while ```_name _pic _bio``` are string.


### 3. How to become a volunteer
Only an account with a **Host** role can become a volunteer thereby making the host avaliable to a campaign, calling the **becomeVolun()** with an account that doesn't have a host role will return an error.

```
becomeVolun()
```

### 4. How to become a un volunteer
Only an account with a **Host** thereby making the host unavaliable to a campaign, calling the **becomeVolun()** with an account that doesn't have a host role will return an error.

```
unVolun()
```

### 5.  How to Create a Schedule or Meeting
Only an account with a **Host** in order to create a schedule two parameters are required whuich are ```time``` and ```fee```.

```
createSchedule(uint256 _time, uint256 _fee)
```

### 6. Joining a Meeting
Only **User** can call this function, it takes the address of a specific host and the ID of a meeting created and assign the user to the meeting
```
joinMeeting(address _host, uint256 _id)
```

### 7.  Creating a Campaign
Only an account with a **User** can create a campaign, when this function is called it creates a campaign and assigns randomly any volunteer which is a host tha has **becomeVolun** and then the campaigns start, it gives the user ability to create a meeting between them and a random **host**.

```
createCampaign()
```

### 7.  Ending a campaign
Only an account with a **User** can end a campaign, when this function is called it takes the address of the **User** and the **Id** of the campaign in order to close the campaign

```
endCampaign(address _user, uint256 _id)
```

### 8.  CheckUpKeep function from ChainLink
This is the ```chainlink``` automation function which is used to check if a meeting time has expired then ```UpkeepNeeded``` is returned.

```
function checkUpkeep(bytes memory /* checkData */) public view override returns ( bool upkeepNeeded,
    bytes memory /* performData */  ) {
        
        for (uint i = 0; i < AllHost.length; i++) {
            for (uint j = 0; j < Meeting[AllHost[i]].length; j++) {
                if(Meeting[AllHost[i]][j].time > 0 && Meeting[AllHost[i]][j].completed == false){
                    bool isOpen = XTELPState.OPEN == s_xtelpState[msg.sender];
                    bool timePassed = ((block.timestamp - Meeting[AllHost[i]][j].start) >  Meeting[AllHost[i]][j].time);
                    upkeepNeeded = (isOpen && timePassed);
                }
                
            }
        }
       
    }
```

### 9.  CheckUpKeep function from ChainLink
This is the ```chainlink``` automation function that checks if ```upkeepNeeded``` is true if yes it set the meeting ```completed``` attribute to completed.

```
  function performUpkeep(bytes calldata /*performData*/) external override {
        for (uint i = 0; i < AllHost.length; i++) {
            for (uint j = 0; j < Meeting[AllHost[i]].length; j++) {
               (bool upkeepNeeded, ) = checkUpkeep("");
                require(upkeepNeeded, "Doesn't meet requirement for UpKeep");
                Meeting[AllHost[i]][j].completed = true;
                Meeting[AllHost[i]][j].end = block.timestamp;
                s_xtelpState[AllHost[i]] = XTELPState.CLOSED;
            }
        }        
        
    }
```



## Issue
This repository is maintained actively, so if you face any issue please <a href="https://github.com/thexovc/xtelpt-web3/issues/new">raise an issue</a>.

<h4>Liked the work ?</h4>
Give the repository a star :-)
