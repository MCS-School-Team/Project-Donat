// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import { ERC20 } from './ERC20.sol';
import "./IERC20.sol";

contract Crowd {

	/// ERRORS ///

	/// @notice Thrown when trying to change the state of the campaign or renounce the contract without being the manager
	error Unauthorized();
	/// @notice Thrown when trying to claim a refund while refunds are closed
	error RefundsClosed();
	/// @notice Thrown when trying to contribute while contributions are closed
	error ContributionsClosed();


	/// DATA STRUCTURES ///
    /// @notice Campaign description
    struct Campaign {
        address owner; // owner of the campain
        uint goal; // sum we need
        uint pledged; // sum we've currently received
		State state; // state of the campaign
        bool claimed; // whether the managers have collected money and finished the campaign
    }

    // @notice possible states of a campaign
    enum State { //state of the campaign
        CLOSED,
        OPEN
    }

    //@notice auxillary mapping to help States work into struct
    mapping (uint => uint) testMapping;   //@notice auxillary mapping to help States work into struct

    /// @notice url to the token 
    IERC20 public immutable token;
    /// @notice mapping keeps the campaigns' id
    mapping(uint => Campaign) public campaigns;
    /// @notice id of the current campaign
    uint public currentId; //
    /// @notice mapping that keeps the addressess and pledges of all the donators of the campaign
    mapping(uint => mapping(address => uint)) public pledges;
    /// @notice mapping that keeps the addressess and pledges of all the donators of the campaign
    mapping(uint => address[]) public pledgers;
    /// @notice mapping that keeps the addressess and admin rights of campaign managers
    mapping (uint => mapping(address => bool)) public admins;


	/// EVENTS ///
    event Launched(uint id, address owner, uint goal, State _state);
    event Cancel(uint id);
    event Pledged(uint id, address pledger, uint amount);
    event Unpledged(uint id, address pledger, uint amount);
    event Claimed(uint id);
    event Refunded(uint id, address pledger, uint amount);
    event StateUpdated(State state);
    event MoneyReceived (address indexed _from, uint _amount);
    event LimitChanged (address indexed _changed, uint _oldLimit, uint _newLimit);

    constructor(address _token) {
        token = IERC20(_token);
    }
    

	/// FUNCTIONS ///

    //@notice auxillary functions to help States work into struct
    function getValueClosed() public view returns(uint) {
        return testMapping[uint(State.CLOSED)];
    }
   function getValueOpen() public view returns(uint) {
        return testMapping[uint(State.OPEN)];
    }

    //@notice function to launch the campaign
    function launch(uint _goal) public {
    
        campaigns[currentId] = Campaign({
            owner: msg.sender,
            goal: _goal,
            pledged: 0,
            state: State.OPEN,
            claimed: false
        });

        emit Launched(currentId, msg.sender, _goal, State.OPEN);
        currentId += 1;
    }

    //@notice function to cancel the campaign
    function cancel(uint _id) external {
        Campaign memory campaign = campaigns[_id];
        require(msg.sender == campaign.owner, "not an owner!");
        require(campaign.state == State.OPEN, "campaign is not opened!");

        delete campaigns[_id];
        emit Cancel(_id); // event that the campaign was cancelled
   }

    // function to make user an admin
    function makeAdmin(uint _id, address _member) public {
        Campaign memory campaign = campaigns[_id];
        require(msg.sender == campaign.owner, "not an owner!");
        
        admins[_id][_member] = true;
    }

    // function to revoke an admin role 
    function revokeAdmin(uint _id, address _member) public {
        Campaign memory campaign = campaigns[_id];
        require(msg.sender == campaign.owner, "not an owner!");
        
        admins[_id][_member] = true;
    }


   //function to donate / pledge
   function pledge(uint _id, uint _amount) external {
       Campaign storage campaign = campaigns[_id];
       require(campaign.state == State.OPEN, "campaign is not opened!");

       campaign.pledged += _amount;
       pledges[_id][msg.sender] += _amount;
       token.transferFrom(msg.sender, address(this), _amount);
       pledgers[_id].push(msg.sender);

       emit Pledged(_id, msg.sender, _amount);
   }


   	// @notice Update the state of the campaign, only available to the manager of the campaign
    // @params id of the chosen campaign
   function setState(uint _id) public {
        Campaign storage campaign = campaigns[_id];
        require(msg.sender == campaign.owner, "not an owner");

        campaign.state = State.CLOSED;
        emit StateUpdated(campaign.state);
   }

   //function to withdraw money by manager
   function claim(uint _id) external {
       Campaign storage campaign = campaigns[_id];
       require(msg.sender == campaign.owner || admins[_id][msg.sender] == true, "not enough rights!");
       require(campaign.pledged >= campaign.goal, "pledged is too low");
       require(!campaign.claimed, "already claimed");
       
       campaign.claimed = true;
       token.transfer(msg.sender, campaign.pledged);
       emit Claimed(_id);
   }
   

   //function to make a refund by manager to a user
   function refund(uint _id, address _address) external {
       Campaign storage campaign = campaigns[_id];
       require(campaign.state == State.OPEN, "campaign is not opened!");
       require(msg.sender == campaign.owner, "not an owner");

       uint pledgedAmount = pledges[_id][_address];
       pledges[_id][_address] = 0;
       token.transfer(_address, pledgedAmount);
       campaigns[_id].pledged -= pledgedAmount;
       emit Refunded(_id, _address, pledgedAmount);
   }

   //function to make a refund by manager to all campaign's donators
   function refundAll(uint _id) external {
       Campaign storage campaign = campaigns[_id];
       require(campaign.state == State.OPEN, "campaign is not opened!");
       require(msg.sender == campaign.owner, "not an owner");

       address[] memory campaignPledgers = pledgers[_id];
       for(uint i = 0; i <= campaignPledgers.length; i++) {
           uint pledgedAmount = pledges[_id][campaignPledgers[i]];
           pledges[_id][campaignPledgers[i]] = 0;
           campaigns[_id].pledged -= pledgedAmount;
           token.transfer(campaignPledgers[i], pledgedAmount);
           emit Refunded(_id, campaignPledgers[i], pledgedAmount);
       }
   }

    //functions to receive money
    fallback() external payable {}
    receive() external payable {
        emit MoneyReceived(msg.sender, msg.value);
    }
}