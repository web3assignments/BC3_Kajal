
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
var frontEndSimpleContract1 = artifacts.require("frontEndSimpleContract1");

module.exports = async function(deployer) {
    const frontEndSimpleContract1 = await deployProxy(frontEndSimpleContract1, {deployer});
    console.log(`Address of frontEndSimpleContract1: ${frontEndSimpleContract1.address}`)
};
