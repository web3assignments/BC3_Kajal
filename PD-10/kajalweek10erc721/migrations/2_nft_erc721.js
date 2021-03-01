const NFT = artifacts.require("NFT");

module.exports = async function(deployer) {
await deployer.deploy(NFT);
const NFTk= await NFT.deployed();
NFTk.CreateNFT('0xb2b94c93bdE5F6dd53F3eE4F33D95Aec21499475', 'https://jsonkeeper.com/b/3NG3');
};