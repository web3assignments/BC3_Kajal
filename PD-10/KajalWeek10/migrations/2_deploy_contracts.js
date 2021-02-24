//deployment
const KajalContract = artifacts.require("KajalContract")

module.exports = function(deployer) {
deployer.deploy(KajalContract)
};