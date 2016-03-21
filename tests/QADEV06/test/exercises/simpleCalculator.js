var expect = require('chai').expect;

var sum = function(val1,val2) {
	return val1+val2;
}

describe('Simple Calculator',function() {
	it.only('#add 1 + 2 = 3',function() {   //it.only = solo se ejecuta este test
		var val1 = 1;
		var val2 = 2;
        var expectedRes = 3;
        var actualRes = sum(val1,val2);

       expect(actualRes).to.equal(expectedRes);

	});
    
    it.skip('#add 1 - 2 = 3',function() {   ///it.skip = todos los test cases excepto este
		var val1 = 1;
		var val2 = -2;
        var expectedRes = -1;
        var actualRes = sum(val1,val2);

       expect(actualRes).to.equal(expectedRes);

	});
    

    it('#add 1,3 + 2,4 = 3,7',function() {
		var val1 = 1.3;
		var val2 = 2.4;
        var expectedRes = 3.7;
        var actualRes = sum(val1,val2);

       expect(actualRes).to.equal(expectedRes);

	});

});