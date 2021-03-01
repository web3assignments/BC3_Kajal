//contract adress deployment ophalen
const contract_address = '0x05199384A04FEdFde792a2655cE61E5d7B9948eD';
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
// Function from web3examples. responsible for loading the provider.
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

//functie op data te verzenden
function storeGegevens(){
    var gegevensstored = document.getElementById("gegevensstored").value;
    console.log(gegevensstored);
    contract.methods.setGegevens(gegevensstored).send({from: accounts[0]});
    console.log(gegevensstored);
}

//functie om data op te halen
function getGegevens() {
    //contract call naar de sol contract
    contract.methods.getGegevens().call().then( function( Gegevenss ) {
      console.log("Dit zijn de opgeslagen gegevens: ", Gegevenss);
      document.getElementById('Gegevenss').innerHTML = Gegevenss;
    });
  }
