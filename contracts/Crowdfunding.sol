// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <0.8.0;
pragma experimental ABIEncoderV2;

import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract Crowdfunding is VRFConsumerBase {
    bytes32 internal keyHash;
    uint256 internal fee;

    string[] public themes;
    string public currentTheme;
    uint256 public workcount;
    Work[] public works;
    mapping(address => uint) public fans;

    struct Work {
        uint256 id;
        string title;
        string description;
        string numberOfWords;
        string currentState;
        uint256 totalFund;
        address writerAddress;
    }

    constructor()
        public
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255,
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB
        )
    {
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
        fee = 0.0001 * 10**18; // 0.0001 LINK

        themes = [
            "Love",
            "Power",
            "Freedom",
            "Identity",
            "Time",
            "Truth",
            "Beauty",
            "Wisdom",
            "Courage",
            "Hope",
            "Dreams",
            "Empathy",
            "Inspiration",
            "Mystery",
            "Desire",
            "Growth",
            "Knowledge",
            "Imagination",
            "Reality",
            "Change",
            "Purpose"
        ];

        currentTheme = "Inspiration";
    }

    /**
     * Writer create work
     */
    function createWork(
        string calldata title,
        string calldata description,
        string calldata numberOfWords
    ) external
    {
        works.push(Work(
            workcount,
            title,
            description,
            numberOfWords,
            "In Progress",
            0,
            msg.sender
        ));
        workcount++;       
    }

    /**
     * Donate to Writer's work
     */
    function donate(uint256 id) payable external {
        fans[msg.sender] += msg.value;
        works[id].totalFund += msg.value;
    }

    /**
     * Writer withdraw the funds from the contract
     */
    function withdraw(uint256 id) external {
        Work storage writerWork = works[id];
        require(writerWork.writerAddress == msg.sender, "You don't own this work");
        msg.sender.transfer(writerWork.totalFund);
        writerWork.totalFund = 0;
    }

    /**
     * Change theme random with Chainlink VRF
     */
    function changeTheme() external {
         getRandomNumber();
    }

    /**
     * Requests randomness
     */
    function getRandomNumber() public returns (bytes32 requestId) {
        require(
            LINK.balanceOf(address(this)) > fee,
            "Not enough LINK - fill contract with faucet"
        );
        return requestRandomness(keyHash, fee);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness)
        internal
        override
    {
        uint256 _randomNumber = uint256(
            keccak256(
                abi.encode(
                    block.timestamp,
                    block.difficulty,
                    msg.sender,
                    randomness
                )
            )
        ) % 20;
        currentTheme = themes[_randomNumber];
    }
}