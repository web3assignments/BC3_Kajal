
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
var KajalOpslag = artifacts.require("KajalOpslag");

module.exports = async function(deployer) {
    const KajalOpslag = await deployProxy(KajalOpslag, {deployer});
    console.log(`Address of KajalOpslag: ${KajalOpslag.address}`)
};
