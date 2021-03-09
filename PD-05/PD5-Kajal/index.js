const contract_address = '0xd73e8EEAD461e7f6a291fBE30790EC539f3094fD';
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_gegevens",
				"type": "string"
			}
		],
		"name": "setGegevens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getGegevens",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

window.addEventListener('load', asyncloaded);    
async function asyncloaded() {
    web3 = new Web3(Web3.givenProvider); // provider from metamask      
    var result = await web3.eth.requestAccounts().catch(x => console.log(x.message));
    console.log(`web3 is present: ${web3.version}`); // note: use ` (back quote)
    const network = await web3.eth.net.getId().catch((reason) => console.log(`Cannnot find network ${reason}`));
    if (typeof network === 'undefined' || network != 4) { console.log("Please select Rinkeby test network"); return; }
    console.log("Ethereum network: Rinkeby")
    accounts = await web3.eth.getAccounts();
    console.log(accounts[0]); // show current user.
    contract = new web3.eth.Contract(abi, contract_address);
}
window.addEventListener('load', asyncloaded);     

function setGegevens(){
    var setgegevens = document.getElementById("setgegevens").value;
    console.log(setgegevens);
    contract.methods.setGegevens(setgegevens).send({from: accounts[0]}).then(x => console.log(x));
}

function getGegevens() {
    contract.methods.getGegevens().call().then( function( gegevens ) {
      console.log("gegevens: ", gegevens);
      document.getElementById('uitkomstGegevens').innerHTML = gegevens;
    });
  }
