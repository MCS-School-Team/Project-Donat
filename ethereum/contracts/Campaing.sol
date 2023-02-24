// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract CampaingFactory is ERC20 {

    constructor() ERC20("KickToken", "KTK") {}
    mapping(address => address) public campaingToOwner;
    //Need this to get campaings list!
    address[] public campaings;
    uint public campaingsCount;
    function createCampaing(string memory  _name,string memory  _description, uint _goal, string memory _video, string memory _site, string memory _image,uint _timeStartInSec, uint _timeEndInSec,string memory _country, string memory _category) public returns (address){
        campaingsCount+=1;
        Campaing campaing = new Campaing(_name, _description,_goal,_video,_site,_image,_timeStartInSec,_timeEndInSec,_country,_category);
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
 
    
    address headContract;
    string public name;
    address public owner;
    uint public goal;
    uint public treasure;
    string public description;
    string public site;
    string public video;
    string public image;
    uint public timeStartInSec;
    uint public timeEndInSec;
 string public country;
  string public category;
    mapping(address => uint256) donaters;
          uint lastUpdated;


function updateTimestamp() public {
  lastUpdated = block.timestamp;
}
   

    constructor(string memory  _name,string memory  _description, uint _goal, string memory _video, string memory _site, string memory _image,uint _timeStartInSec,uint _timeEndInSec,string memory _country, string memory _category  ){
        owner = tx.origin;
        name = _name;
        headContract = msg.sender;
        description = _description;
        goal = _goal* 10**18;
        video=_video;
        site = _site;
        image = _image;
        timeStartInSec= _timeStartInSec;
        timeEndInSec= _timeEndInSec;
        country = _country;
        category = _category;
        }
  uint daysDiff = (timeEndInSec- lastUpdated);

    modifier time_out() {
        require(daysDiff > 0  , "Campaing is not finished(time)");
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

