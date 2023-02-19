// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract CampaingFactory is ERC20 {

    constructor() ERC20("KickToken", "KTK") {}
    mapping(address => address) public campaingToOwner;
    //Need this to get campaings list!
    address[] public campaings;
    uint public campaingsCount;
    function createCampaing(string memory  _name,string memory  _description, uint _goal) public returns (address){
        campaingsCount+=1;
        Campaing campaing = new Campaing(_name, _description,_goal);
        campaingToOwner[address(campaing)] = msg.sender;
        campaings.push(address(campaing));
        return address(campaing);
    }
     function campaingsArray() public view returns (address[] memory) {
        return campaings;
    }
    function addTokens(address donater,uint value) external{
        require((campaingToOwner[msg.sender]!=address(0)),"contract can add tokens");
        _mint(donater,value);
    }

}

contract Campaing{
    enum State{
        Pending,
        Active,
        Blocked
    }

    State public state = State.Active;
    address headContract;
    string public name;
    address public owner;
    uint public goal;
    uint public treasure;
    string public description;
    uint public time;
    mapping(address => uint256) donaters;
    

    constructor(string memory  _name,string memory  _description, uint _goal){
        owner = tx.origin;
        name = _name;
        headContract = msg.sender;
        description = _description;
        goal = _goal* 10**18;
        time = block.timestamp + 5 minutes;
    }

    modifier time_out() {
        require(block.timestamp > time,"Campaing is not finished(time)");
        _;
    }

    modifier fulfilled() {
        require(treasure >= goal,"Campaing is not finished(money)");
        _;
    }

    function check_donate() public view returns (uint256) {
        return donaters[msg.sender];
    }

    function donate() public payable {
        require(goal > treasure, "Treasure is full");
        treasure += msg.value;
        CampaingFactory(headContract).addTokens(msg.sender,msg.value);
        donaters[msg.sender] += msg.value;
    }

    function withdraw() public payable fulfilled {
        payable(owner).transfer(treasure);
    }
    
    function money_back() public payable time_out {
        uint money = donaters[msg.sender];
        donaters[msg.sender] = 0;
        payable(msg.sender).transfer(money);
    }
    function getPayment() public payable time_out fulfilled{
        require(msg.sender == owner,"you are not owner!");
        uint payment = address(this).balance;
        payable(owner).transfer(payment);
    }
}
