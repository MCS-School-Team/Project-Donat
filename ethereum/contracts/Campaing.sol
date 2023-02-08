// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CampaingFactory {
    mapping(address => address) public ownerToCampaing;

    function createCampaing(
        string memory _name,
        string memory _description,
        uint256 _goal
    ) public returns (address) {
        require(
            ownerToCampaing[msg.sender] == address(0),
            "This adress already have Campaing!"
        );
        Campaing campaing = new Campaing(_name, _description, _goal);
        ownerToCampaing[msg.sender] = address(campaing);
        return address(campaing);
    }
}

contract Campaing {
    enum State {
        Pending,
        Active,
        Blocked
    }

    State public state = State.Active;
    string public name;
    address public owner;
    uint256 public goal;
    uint256 public treasure;
    string public description;
    uint256 public time;
    mapping(address => uint256) donaters;

    constructor(
        string memory _name,
        string memory _description,
        uint256 _goal
    ) {
        owner = tx.origin;
        name = _name;
        description = _description;
        goal = _goal * 10**18;
        time = block.timestamp + 20 minutes;
    }

    modifier time_out() {
        require(block.timestamp > time);
        _;
    }

    modifier fulfilled() {
        require(treasure >= goal);
        _;
    }

    function check_donate() public view returns (uint256) {
        return donaters[msg.sender];
    }

    function donate() public payable {
        require(goal > treasure, "Treasure is full");
        treasure += msg.value;
        donaters[msg.sender] += msg.value;
    }

    function withdraw() public payable fulfilled {
        payable(owner).transfer(treasure);
    }

    function money_back() public payable time_out {
        uint256 money = donaters[msg.sender];
        donaters[msg.sender] = 0;
        payable(msg.sender).transfer(money);
    }
}
