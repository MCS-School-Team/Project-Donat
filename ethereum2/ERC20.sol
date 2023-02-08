// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.10;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    /// DATA STRUCTURES ///
   uint totalTokens;
   mapping(address => uint) balances; // connects addresses to their balances
   mapping(address => mapping(address => uint)) allowances;

    constructor(uint initialSupply) {
        mint(initialSupply);
    }

	/// MODIFIERS ///
    modifier enoughTokens(address _from, uint _amount) {
        require(balanceOf(_from) >= _amount, "Not enough tokens!");
        _;
    }

	/// EVENTS ///
    event MoneyReceived (address indexed _from, uint _amount);

	/// FUNCTIONS ///
    function decimals() public pure returns(uint) {
        return 0;
    }
    function totalSupply() public view returns (uint256) {
        return totalTokens;
    }
    function balanceOf(address account) public view returns(uint) {
        return balances[account];
    }
    function transfer(address to, uint amount) external enoughTokens(msg.sender, amount) {
        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
    }
    function allowance(address owner, address spender) external view returns(uint) {
        return allowances[owner][spender];
    }
    function approve(address spender, uint amount) external {
        allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
    }
    function transferFrom(address sender, address recipient, uint amount) public enoughTokens(msg.sender, amount) {
        allowances[sender][recipient] -= amount;
        balances[sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
    }
    function mint(uint amount) public {
        balances[msg.sender] += amount;
        totalTokens += amount;
        emit Transfer(address(0), msg.sender, amount);
    }
    function burn(uint amount) external enoughTokens(msg.sender, amount) {
        balances[msg.sender] -= amount;
        totalTokens -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
    
    //functions to receive money
    fallback() external payable {}
    receive() external payable {
        emit MoneyReceived(msg.sender, msg.value);
    }
}

contract TokenSell {
    IERC20 public token;
    address owner;
    address public thisAddr = address(this);

    event Bought(address indexed buyer, uint amount);
    event Sell(address indexed seller, uint amount);

    constructor(IERC20 _token) {
        token = _token;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner!");
        _;
    }

    function balance() public view returns(uint) {
        return thisAddr.balance;
    }

    function buy() public payable {
        require(msg.value >= _rate(), "Incorrect sum");
        uint tokensAvailable = token.balanceOf(thisAddr);
        uint tokensToBuy = msg.value / _rate();
        require (tokensToBuy <= tokensAvailable, "Not enough tokens!");
        token.transfer(msg.sender, tokensToBuy);
        emit Bought(msg.sender, tokensToBuy);
    }

    function sell(uint amount) public {
        require(amount > 0, "Tokens must be greater than 0");
        uint allowance = token.allowance(msg.sender, thisAddr);
        require(allowance >= amount, "Wrong allowance");

        token.transferFrom(msg.sender, thisAddr, amount);
        payable(msg.sender).transfer(amount * _rate());
        emit Sell(msg.sender, amount);
    }

    function withdraw(uint amount) public onlyOwner {
        require(amount <= balance(), "Not enough funds!");
        payable(msg.sender).transfer(amount);
    }

    function _rate() private pure returns(uint) {
        return 1 ether;
    }

    //functions to receive money
    fallback() external payable {}
    receive() external payable {
    }
}
