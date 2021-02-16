pragma solidity ^0.5.1;
import "remix_tests.sol";
import "./SimpleStorage.sol";

contract SimpleStorageTest {
    
    SimpleStorage private testContract;
    
    function beforeEach() external {
        testContract = new SimpleStorage("Welkom");
    }
    
    function shouldHaveAValue() external {
        Assert.equal(testContract.value(), "Welkom", "Initial value should be 'Welkom' ");
    }

    function shouldChangeValue() external {
        testContract.setValue("Hoe gaat het?");
        Assert.equal(testContract.value(), "Hoe gaat het?", "Value shoud have changed to 'Hoe gaat het?' ");
    }
    	
    function shoulddifferentiateValue() external {

		testContract.setValue("Hoe gaat het?");
		Assert.equal(testContract.value(), "Hoe gaat het?", "Value shoud have changed to 'Hoe gaat het?' ");
	}
	
	function shouldSuccesValue() external {
		testContract.setValue("Oke");
		Assert.equal(testContract.value(), "Oke", "Value shoud have changed to 'Oke' ");
	}
	
	function shouldSeeValue() external {
		testContract.setValue("Totziens!");
		Assert.equal(testContract.value(), "Totziens!", "Value shoud have changed to 'Totziens!' ");
	}
}
