var MyContract = artifacts.require(“Migrations”);

module.exports = function(deployer) {
  // Hier wordt het gedeployed. 
  deployer.deploy(Migrations.sol);
};
