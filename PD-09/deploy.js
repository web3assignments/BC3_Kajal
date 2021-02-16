
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
var OpslaanGegevens = artifacts.require("OpslaanGegevens");

module.exports = async function(deployer) {
    const OpslaanGegevens = await deployProxy(OpslaanGegevens, {deployer});
    console.log(`Address of OpslaanGegevens: ${OpslaanGegevens.address}`)
};
