module.exports = {
    solidity: "0.8.4",
    defaultNetwork: "hardhat",
    networks: {
      hardhat: {
        chainId: 1337
      },
      rinkeby: {
        url: "https://rinkeby.infura.io/v3/https://mainnet.infura.io/v3/ebbe5f54510b4f9b81445db37ec272eb",
        accounts: ["0x860E0Aa7f9c99884DA69d6a20fb78B9307B0C2D5"]
      }
    }
  };