pragma solidity 0.5.12;

contract bank {
    uint8 private klantCount;
    mapping (address => uint) private balances;
    address public owner;

    // Dit event logged een aanbetaling die is gedaan door een bepaald adres en het bedrag ervan.
    event LogDepositMade(address indexed accountAddress, uint amount);

    // Constructor is ‘betaalbaar’  dus kan de aanvankelijke financiering van 1 ontvangen. 
    constructor() public payable {
        require(msg.value == 1 ether, "1 ether initiële financiering is vereist");
        owner = msg.sender;
        klantCount = 0;
    }

 	// De balans van de gebruiker wordt gereturned na registratie van de gebruiker. Verder krijgt deze klant ook 2 ether’s cadeau.
    function enroll() public returns (uint) {
        if (klantCount < 2) {
            klantCount++;
            balances[msg.sender] = 2 ether;
        }
        return balances[msg.sender];
    }

	// Returned de balans van de gebruiker nadat de aanbetaling is gebeurd.
    function deposit() public payable returns (uint) {
        balances[msg.sender] += msg.value;
        emit LogDepositMade(msg.sender, msg.value);
        return balances[msg.sender];
    }

	// Return: de overgebleven balans wordt gegeven.
    function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
        // Controleert of er genoeg op de bank zit anders return het gewoon de balans.
        if (withdrawAmount <= balances[msg.sender]) {
            balances[msg.sender] -= withdrawAmount;
            msg.sender.transfer(withdrawAmount);
	    emit LogDepositMade(msg.sender, withdrawAmount);
        }
        return balances[msg.sender];
    }

	// Returned de balans van de gebruiker, dit wordt alleen gelezen, vandaar view.
    function balance() public view returns (uint) {
        return balances[msg.sender];
    }

    // Returned de balans van dit contract
    function depositsBalance() public view returns (uint) {
        return address(this).balance;
    }
}
