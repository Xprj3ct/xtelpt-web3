// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface KeeperCompatibleInterface {
    function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData);
    function performUpkeep(bytes calldata performData) external;
}

/**@title XTELPT
 * @author Osariemen Daniel Osazee - Xtelpt :  Xprj3ct Team
 * @notice This contract is for implementing the logic of Xtelpt
 * @dev This implements the Chainlink Keepers
 */

contract XTELPT is  KeeperCompatibleInterface {
    
    /* Type declarations */
    enum XTELPState {
        OPEN,
        CLOSED
    }
    /* State variables */
    uint public s_lastTimeStamp;

    // Use an i_interval in seconds and a timestamp to slow execution of Upkeep
    uint private i_interval;
    uint public v_lastTimeStamp;


    /* string User Types */
    string userType = "User";
    string hostType = "Host";
    string volunType = "Volun";

    /* Campaign and Meeting variables */
    campaign[] public Campaign;

    meeting[] public Meeting;

    uint256 public campaignIndex;
    uint256 public meetingIndex;    

    /* User profile mapping */
    mapping(address => profile) public UserProfile;

    /* State mapping */
    mapping(address => XTELPState) private s_xtelpState;
    mapping(address => XTELPState) private volunState;

    /* User Types Arrays */
    address [] public AllHost;

    address [] public AllVolun;
    
    address [] public AllUser;

    /* Struct */
    struct profile {
        address addr;
        string name;
        string role;
        uint256 rating;
        string bio;
        string profilePic;
        bool avaliable;
        bool volun;
    }

    struct meeting {
        address host;
        address user;
        uint256 time;
        uint256 fee;
        bool completed;
    }
    
    struct campaign {
        address volunteer;
        address user;
        uint256 time;
        uint256 fee;
        bool completed;
    }

    /* Modifiers */
    modifier onlyHost  {
        require(keccak256(abi.encodePacked(UserProfile[msg.sender].role)) == keccak256(abi.encodePacked("Host")), "NOT A HOST");
        _;
    }
   
    modifier onlyVolun  {
        require(keccak256(abi.encodePacked(UserProfile[msg.sender].role)) == keccak256(abi.encodePacked("Host")) && UserProfile[msg.sender].avaliable == true , "NOT A VOLUNTEER");
        _;
    }

    modifier onlyUser  {
        require(keccak256(abi.encodePacked(UserProfile[msg.sender].role)) == keccak256(abi.encodePacked("User")), "NOT A USER");
        _;
    }

    
    constructor() {
      s_lastTimeStamp = block.timestamp;
      v_lastTimeStamp = block.timestamp;
      s_xtelpState[msg.sender] = XTELPState.OPEN;
      volunState[msg.sender] = XTELPState.OPEN;
    }

    /**
     * @dev This function `createUser` any body can call this functions and the senders profile
     * would be set to that of a `User`
     */
    function createUser(uint256 _rating, string memory _name, string memory _pic, string memory _bio) public {
        AllUser.push(msg.sender);
        UserProfile[msg.sender].addr = msg.sender;
        UserProfile[msg.sender].name = _name;
        UserProfile[msg.sender].rating = _rating;
        UserProfile[msg.sender].role = userType;
        UserProfile[msg.sender].profilePic = _pic;
        UserProfile[msg.sender].bio = _bio;
    }

    /**
     * @dev This function `createHost` any body can call this functions and the senders profile
     * would be set to that of a `Host`
     */
    function createHost(uint256 _rating, string memory _name, string memory _pic, string memory _bio) public {  
        AllHost.push(msg.sender);
        s_xtelpState[msg.sender] = XTELPState.OPEN;

        UserProfile[msg.sender].addr = msg.sender;
        UserProfile[msg.sender].name = _name;
        UserProfile[msg.sender].rating = _rating;
        UserProfile[msg.sender].role = hostType;
        UserProfile[msg.sender].profilePic = _pic;
        UserProfile[msg.sender].bio = _bio;
    }

    /**
     * @dev This function `createVolun` allows only the Host to call it hence the `OnlyHost` modifier
     * A host can toggle being a volunteer for campaign mode on, thereby making the profile avaliable for campaign 
     */
    function becomeVolun() public onlyHost {
        AllVolun.push(msg.sender);
       
        UserProfile[msg.sender].volun = true;
        UserProfile[msg.sender].avaliable = true;

    }

    /**
     * @dev This function `unVolun` allows only the Host to call it hence the `OnlyHost` modifier
     * A host can toggle being a volunteer for campaign mode off, thereby making the profile unavaliable for campaign 
     */
    function unVolun() public onlyHost {
        // AllVolun.push(msg.sender);
       
        UserProfile[msg.sender].volun = false;
        UserProfile[msg.sender].avaliable = false;

    }

    /**
     * @dev This function `createSchedule` allows only the Host to call it hence the `OnlyHost` modifier
     * after which a Host can create a meeting with some parameters like time and fee needed
     */
    function createSchedule(uint256 _time, uint256 _fee) public onlyHost {
        meetingIndex ++;

        meeting memory NewMeeting;
        NewMeeting.host = msg.sender;
        NewMeeting.time = _time;
        NewMeeting.fee = _fee;

        i_interval = _time;
        s_xtelpState[msg.sender] = XTELPState.OPEN;

        Meeting.push(NewMeeting);
      
    }

    /**
     * @dev This function `joinMeeting` allows only the User to call it hence the `OnlyUser` modifier
     * after which the meeting ID is specified and the user would be assigned to the meeting
     */
    function joinMeeting(uint256 _id) public onlyUser {
        Meeting[_id].user = msg.sender;
    } 

    /**
     * @dev This function `createCampaign` allows only the User to call it hence the `OnlyUser` modifier
     * after which any avaliable volunteer would be assigned to the campaign
     */
    function createCampaign() public onlyUser {
        campaignIndex ++;

        campaign memory NewCampaign;
        NewCampaign.user = msg.sender;
        NewCampaign.time = 60;
        NewCampaign.fee = 0;

        i_interval = 60;
        s_xtelpState[msg.sender] = XTELPState.OPEN;

        for(uint i = 0; i < AllVolun.length; i++){
            if(UserProfile[AllVolun[i]].avaliable == true){
                NewCampaign.volunteer = AllVolun[i];
                UserProfile[AllVolun[i]].avaliable = false;
                break;
            }
        }

        Campaign.push(NewCampaign);
        
      
    }


      /**
     * @dev This is the function that the Chainlink Keeper nodes call
     * they look for `upkeepNeeded` to return True.
     * the following should be true for this to return true:
     * 1. It makes sure that the campaign or meeting is not yet completed
     * 2. The time interval has passed for either meeting or campaign.
     */
    function checkUpkeep(bytes memory checkData) public view override returns ( bool upkeepNeeded,
    bytes memory  performData   ) {
        if(AllHost.length > 0){
        
                for (uint i = 0; i < Meeting.length; i++) {
                    if(Meeting[i].time > 0 && Meeting[i].completed == false){
                        bool isOpen = XTELPState.OPEN == s_xtelpState[msg.sender];
                        bool timePassed = ((block.timestamp - s_lastTimeStamp) >  Meeting[i].time);
                        upkeepNeeded = (isOpen && timePassed);
                        performData = abi.encodePacked(uint256(0)); // This is the new line
                        return (true, performData) ;
                    }
                    
            }
        } if (AllUser.length > 0) {      

            for (uint i = 0; i < Campaign.length; i++) {
            
                    if(Campaign[i].time > 0 && Campaign[i].completed == false){
                        bool isOpen = XTELPState.OPEN == volunState[msg.sender];
                        bool timePassed = ((block.timestamp - v_lastTimeStamp) >  Campaign[i].time);
                        upkeepNeeded = (isOpen && timePassed);
                        performData = abi.encodePacked(uint256(1)); // This is the new line
                        return (true, performData) ;
                    }
                    
                
            }
        }
       
    }

    /**
     * @dev Once `checkUpkeep` is returning `true`, this function is called
     */
    function performUpkeep( bytes calldata performData) external override{
        uint256 decodedValue = abi.decode(performData, (uint256));
        if(decodedValue == 0){
            for (uint i = 0; i < Meeting.length; i++) {
                (bool upkeepNeeded, ) = checkUpkeep("");
                require(upkeepNeeded, "Doesn't meet requirement for UpKeep");
                Meeting[i].completed = true;
                s_xtelpState[AllHost[i]] = XTELPState.CLOSED;
                
            }  
        } if (decodedValue == 1) {
            for (uint i = 0; i < Campaign.length; i++) {
               (bool upkeepNeeded, ) = checkUpkeep("");
                require(upkeepNeeded, "Doesn't meet requirement for UpKeep");
                Campaign[i].completed = true;
                UserProfile[Campaign[i].volunteer].avaliable = false;
                volunState[AllUser[i]] = XTELPState.CLOSED;
            
            }   
        }

               
    }

    /** Getter Functions */

    function meetingNum() public view returns (uint256) {
        return meetingIndex;
    }
    
    function campaignNum() public view returns (uint256) {
        return campaignIndex;
    }

    function getMeeting() public view returns (meeting [] memory) {
        return Meeting;
    }
    
    function getCampaign() public view returns (campaign [] memory) {
        return Campaign;
    }
    
    function getProfile(address userAdd) public view returns (profile memory) {
        return UserProfile[userAdd];
    }

    function getAllHost() public view returns (address [] memory) {
        return AllHost;
    }
    
    function getAllUser() public view returns (address [] memory) {
        return AllUser;
    }
    
    function getAllVolun() public view returns (address [] memory) {
        return AllVolun;
    }

}

