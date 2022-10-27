/**
 *Submitted for verification at Etherscan.io on 2022-10-25
*/

// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
// import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
// import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

interface VRFCoordinatorV2Interface {
  /**
   * @notice Get configuration relevant for making requests
   * @return minimumRequestConfirmations global min for request confirmations
   * @return maxGasLimit global max for request gas limit
   * @return s_provingKeyHashes list of registered key hashes
   */
  function getRequestConfig()
    external
    view
    returns (
      uint16,
      uint32,
      bytes32[] memory
    );

  /**
   * @notice Request a set of random words.
   * @param keyHash - Corresponds to a particular oracle job which uses
   * that key for generating the VRF proof. Different keyHash's have different gas price
   * ceilings, so you can select a specific one to bound your maximum per request cost.
   * @param subId  - The ID of the VRF subscription. Must be funded
   * with the minimum subscription balance required for the selected keyHash.
   * @param minimumRequestConfirmations - How many blocks you'd like the
   * oracle to wait before responding to the request. See SECURITY CONSIDERATIONS
   * for why you may want to request more. The acceptable range is
   * [minimumRequestBlockConfirmations, 200].
   * @param callbackGasLimit - How much gas you'd like to receive in your
   * fulfillRandomWords callback. Note that gasleft() inside fulfillRandomWords
   * may be slightly less than this amount because of gas used calling the function
   * (argument decoding etc.), so you may need to request slightly more than you expect
   * to have inside fulfillRandomWords. The acceptable range is
   * [0, maxGasLimit]
   * @param numWords - The number of uint256 random values you'd like to receive
   * in your fulfillRandomWords callback. Note these numbers are expanded in a
   * secure way by the VRFCoordinator from a single random value supplied by the oracle.
   * @return requestId - A unique identifier of the request. Can be used to match
   * a request to a response in fulfillRandomWords.
   */
  function requestRandomWords(
    bytes32 keyHash,
    uint64 subId,
    uint16 minimumRequestConfirmations,
    uint32 callbackGasLimit,
    uint32 numWords
  ) external returns (uint256 requestId);

  /**
   * @notice Create a VRF subscription.
   * @return subId - A unique subscription id.
   * @dev You can manage the consumer set dynamically with addConsumer/removeConsumer.
   * @dev Note to fund the subscription, use transferAndCall. For example
   * @dev  LINKTOKEN.transferAndCall(
   * @dev    address(COORDINATOR),
   * @dev    amount,
   * @dev    abi.encode(subId));
   */
  function createSubscription() external returns (uint64 subId);

  /**
   * @notice Get a VRF subscription.
   * @param subId - ID of the subscription
   * @return balance - LINK balance of the subscription in juels.
   * @return reqCount - number of requests for this subscription, determines fee tier.
   * @return owner - owner of the subscription.
   * @return consumers - list of consumer address which are able to use this subscription.
   */
  function getSubscription(uint64 subId)
    external
    view
    returns (
      uint96 balance,
      uint64 reqCount,
      address owner,
      address[] memory consumers
    );

  /**
   * @notice Request subscription owner transfer.
   * @param subId - ID of the subscription
   * @param newOwner - proposed new owner of the subscription
   */
  function requestSubscriptionOwnerTransfer(uint64 subId, address newOwner) external;

  /**
   * @notice Request subscription owner transfer.
   * @param subId - ID of the subscription
   * @dev will revert if original owner of subId has
   * not requested that msg.sender become the new owner.
   */
  function acceptSubscriptionOwnerTransfer(uint64 subId) external;

  /**
   * @notice Add a consumer to a VRF subscription.
   * @param subId - ID of the subscription
   * @param consumer - New consumer which can use the subscription
   */
  function addConsumer(uint64 subId, address consumer) external;

  /**
   * @notice Remove a consumer from a VRF subscription.
   * @param subId - ID of the subscription
   * @param consumer - Consumer to remove from the subscription
   */
  function removeConsumer(uint64 subId, address consumer) external;

  /**
   * @notice Cancel a subscription
   * @param subId - ID of the subscription
   * @param to - Where to send the remaining LINK to
   */
  function cancelSubscription(uint64 subId, address to) external;

  /*
   * @notice Check to see if there exists a request commitment consumers
   * for all consumers and keyhashes for a given sub.
   * @param subId - ID of the subscription
   * @return true if there exists at least one unfulfilled request for the subscription, false
   * otherwise.
   */
  function pendingRequestExists(uint64 subId) external view returns (bool);
}

abstract contract VRFConsumerBaseV2 {
  error OnlyCoordinatorCanFulfill(address have, address want);
  address private immutable vrfCoordinator;

  constructor(address _vrfCoordinator) {
    vrfCoordinator = _vrfCoordinator;
  }

  
  function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal virtual;

  function rawFulfillRandomWords(uint256 requestId, uint256[] memory randomWords) external {
    if (msg.sender != vrfCoordinator) {
      revert OnlyCoordinatorCanFulfill(msg.sender, vrfCoordinator);
    }
    fulfillRandomWords(requestId, randomWords);
  }
}

interface KeeperCompatibleInterface {
    function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData);
    function performUpkeep(bytes calldata performData) external;
}

contract XTELP is  KeeperCompatibleInterface, VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_subscriptionId;
    bytes32 private immutable i_gasLane;
    uint32 private immutable i_callbackGasLimit;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;

    enum XTELPState {
        OPEN,
        CLOSED
    }

    uint public counter;    
    // Use an i_interval in seconds and a timestamp to slow execution of Upkeep
    uint private i_interval;
    uint public s_lastTimeStamp;
    uint public v_lastTimeStamp;


    // string userType = "User";
    string userType = "User";
    string hostType = "Host";
    string volunType = "Volun";

    mapping(address => profile) public UserProfile;

    mapping(address => campaign[]) public Campaign;

    mapping(address => meeting[]) public Meeting;

    mapping(address => uint256) public campaignIndex;

    mapping(address => XTELPState) private s_xtelpState;
    mapping(address => XTELPState) private volunState;
    
    address [] public AllHost;

    address [] public AllVolun;
    
    address [] public AllUser;

    address [] public recentCampaignCreator;


    struct profile {
        address addr;
        string name;
        string role;
        uint256 rating;
        string bio;
        string profilePic;
        bool avaliable;
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

    event RequestedID(uint256 indexed requestId);

    
    constructor( 
        // address vrfCoordinatorV2,
        uint64 subscriptionId
        // bytes32 gasLane, // keyHash
        // uint32 callbackGasLimit
    ) VRFConsumerBaseV2(0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D) {
        i_vrfCoordinator = VRFCoordinatorV2Interface(0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D);
        i_gasLane = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
        i_subscriptionId = subscriptionId;
        i_callbackGasLimit = 100000;

        s_lastTimeStamp = block.timestamp;
        v_lastTimeStamp = block.timestamp;
        s_xtelpState[msg.sender] = XTELPState.OPEN;
        volunState[msg.sender] = XTELPState.OPEN;
    }


    function createUser(uint256 _rating, string memory _name, string memory _pic, string memory _bio) public {
        AllUser.push(msg.sender);
        UserProfile[msg.sender].addr = msg.sender;
        UserProfile[msg.sender].name = _name;
        UserProfile[msg.sender].rating = _rating;
        UserProfile[msg.sender].role = userType;
        UserProfile[msg.sender].profilePic = _pic;
        UserProfile[msg.sender].bio = _bio;
    }

    
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

    function createVolun() public onlyHost {
        AllVolun.push(msg.sender);
       
        UserProfile[msg.sender].role = volunType;

    }

    // Schedule a meeting
    function createSchedule(uint256 _time, uint256 _fee) public onlyHost {
        meeting memory NewMeeting;
        NewMeeting.host = msg.sender;
        NewMeeting.time = _time;
        NewMeeting.fee = _fee;

        i_interval = _time;
        s_xtelpState[msg.sender] = XTELPState.OPEN;

        Meeting[msg.sender].push(NewMeeting);
      
    }

    // Join Meeting
    function joinMeeting(address _host, uint256 _id) public onlyUser {
        Meeting[_host][_id].user = msg.sender;
    } 

    // Create campaign
    function createCampaign(uint256 _fee) public onlyUser {
        recentCampaignCreator.push(msg.sender);

        uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );

        // emit requested ID
        emit RequestedID(requestId);
    }


     function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        
        uint256 indexOfHost = randomWords[0] % AllHost.length;
        address recentHost = AllHost[indexOfHost];
        
        campaign memory NewCampaign;
        NewCampaign.user = recentCampaignCreator[recentCampaignCreator.length - 1];
        NewCampaign.time = 60;
        NewCampaign.volunteer = recentHost;

        i_interval = 60;
        volunState[msg.sender] = XTELPState.OPEN;

        Campaign[msg.sender].push(NewCampaign);

        emit RequestedID(indexOfHost);

    }   


   function checkUpkeep(bytes memory checkData) public view override returns ( bool upkeepNeeded,
    bytes memory  performData   ) {
    if(AllHost.length > 0){
        for (uint i = 0; i < AllHost.length; i++) {
            for (uint j = 0; j < Meeting[AllHost[i]].length; j++) {
                if(Meeting[AllHost[i]][j].time > 0 && Meeting[AllHost[i]][j].completed == false){
                    bool isOpen = XTELPState.OPEN == s_xtelpState[msg.sender];
                    bool timePassed = ((block.timestamp - s_lastTimeStamp) >  Meeting[AllHost[i]][j].time);
                    upkeepNeeded = (isOpen && timePassed);
                    performData = abi.encodePacked(uint256(0)); // This is the new line
                    return (true, performData) ;
                }
                
            }
        }
    } if (AllUser.length > 0) {      

        for (uint i = 0; i < AllUser.length; i++) {
            for (uint j = 0; j < Campaign[AllUser[i]].length; j++) {
                if(Campaign[AllUser[i]][j].time > 0 && Campaign[AllUser[i]][j].completed == false){
                    bool isOpen = XTELPState.OPEN == volunState[msg.sender];
                    bool timePassed = ((block.timestamp - v_lastTimeStamp) >  Campaign[AllUser[i]][j].time);
                    upkeepNeeded = (isOpen && timePassed);
                    performData = abi.encodePacked(uint256(1)); // This is the new line
                    return (true, performData) ;
                }
                
            }
        }
    }
       
    }

    function performUpkeep( bytes calldata performData) external override{
        uint256 decodedValue = abi.decode(performData, (uint256));
        if(decodedValue == 0){
            for (uint i = 0; i < AllHost.length; i++) {
                for (uint j = 0; j < Meeting[AllHost[i]].length; j++) {
                (bool upkeepNeeded, ) = checkUpkeep("");
                    require(upkeepNeeded, "Doesn't meet requirement for UpKeep");
                    Meeting[AllHost[i]][j].completed = true;
                    s_xtelpState[AllHost[i]] = XTELPState.CLOSED;
                }
            }  
        } if (decodedValue == 1) {
            for (uint i = 0; i < AllUser.length; i++) {
            for (uint j = 0; j < Campaign[AllUser[i]].length; j++) {
               (bool upkeepNeeded, ) = checkUpkeep("");
                require(upkeepNeeded, "Doesn't meet requirement for UpKeep");
                Campaign[AllUser[i]][j].completed = true;
                volunState[AllUser[i]] = XTELPState.CLOSED;
            }
            }   
        }

               
    }

   
}