var ICO = artifacts.require("./CryptoTicketsICO.sol");
var TKT = artifacts.require("./TKT.sol");

module.exports = function(deployer, network, accounts) {

    deployer.deploy(TKT, accounts[0]).then(function() {
          deployer.deploy(ICO, TKT.address, accounts[1], accounts[2], accounts[2], accounts[2], accounts[2], accounts[3], accounts[4], accounts[4], accounts[4], accounts[5]);
     });
};
