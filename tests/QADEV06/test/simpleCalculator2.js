var expect = require('chai').expect;

var sum = function(val1,val2) {
	return val1+val2;
}
var substraction = function(val1,val2) {
	return val1-val2;
}


describe('Simple Calculator',function() {
 
    var addArray = [{v1:1,v2:2,r:3},
                    {v1:1,v2:-2,r:-1},
                    {v1:-1,v2:-2,r:-3},
                    {v1:10,v2:22,r:32}];

    var subsArray = [{v1:1,v2:2,r:-1},
                    {v1:1,v2:-2,r:3},
                    {v1:-1,v2:-2,r:1},
                    {v1:10,v2:22,r:-12}];



     addArray.forEach(function(el) {
          
		it('#add '+el.v1+' + '+ el.v2+ ' = ' + el.r,function() {
			var val1 = el.v1;
			var val2 = el.v2;
	        var expectedRes = el.r;
	        var actualRes = substraction(val1,val2);

	       expect(actualRes).to.equal(expectedRes);
	  });     	 
     });

     
  
     subsArray.forEach(function(el) {
          
		it('#subs'+el.v1+' - '+ el.v2+ ' = ' + el.r,function() {
			var val1 = el.v1;
			var val2 = el.v2;
	        var expectedRes = el.r;
	        var actualRes = sum(val1,val2);

	       expect(actualRes).to.equal(expectedRes);
	  });     	 
     });




});