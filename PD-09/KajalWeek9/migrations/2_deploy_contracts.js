const { deployProxy } = require('@openzeppelin/truffle-upgrades');
var OpslaanGegevens = artifacts.require("OpslaanGegevens");

module.exports = async function(deployer) {
    const Opslaan = await deployProxy(OpslaanGegevens, {deployer});
    console.log(`Address of Opslaan: ${Opslaan.address}`)
};