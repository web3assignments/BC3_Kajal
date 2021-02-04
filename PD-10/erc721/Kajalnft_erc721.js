const Kajalnft = artifacts.require("Kajalnft");

module.exports = async function(deployer) {
await deployer.deploy(Kajalnft);
const Kajalnfts= await Kajalnft.deployed();
Kajalnfts.CreateKajalnft('0xb9A57E2576618A9129CF37b3CCfbF01aeDf7DB7e', 'https://jsonkeeper.com/b/5CCZ');
};
