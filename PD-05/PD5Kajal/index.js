//contract voor de deployment op rinkeby via remix



const contract_address = '0xcf8cD83B00328766711385AF4A2836E0006E9622';



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







//functie voor het opslaan van gegevens 



function storeGegevens(){



var gegevensstored = document.getElementById("gegevensstored").value;



console.log(gegevensstored);



contract.methods.setGegevens(gegevensstored).send({from: accounts[0]});



console.log(gegevensstored);



}







//functie voor het ophalen van gegevens



function getGegevens() {



contract.methods.getGegevens().call().then( function( Gegevenss ) {



console.log("Dit zijn de opgeslagen gegevens: ", Gegevenss);



document.getElementById('Gegevenss').innerHTML = Gegevenss;



});



}