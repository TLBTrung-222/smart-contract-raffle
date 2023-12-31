const { ethers } = require("hardhat");

const networkConfig = {
    31337: {
        name: "localhost",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane:
            "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", //you can put anything here, mock contract doesn't care about gas Lane
        subscriptionId: "0",
        callBackGasLimit: "500000",
        interval: "30",
    },
    // VRF contract Address, values can be obtained at https://docs.chain.link/vrf/v2/subscription/supported-networks#sepolia-testnet
    11155111: {
        name: "sepolia",
        vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane:
            "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
        subscriptionId: "4648",
        callBackGasLimit: "500000",
        interval: "30",
    },
};

const developmentChains = ["localhost", "hardhat"];

module.exports = {
    networkConfig,
    developmentChains,
};
