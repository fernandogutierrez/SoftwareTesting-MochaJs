//hooks

describe('suite 1.0',function() {
    before(function(){
    	console.log('Before All 1.0');
    });
    after(function(){
    	console.log('After All 1.0');
    }); 


    beforeEach(function(){
        console.log('Before Each 1.0');

    });

    afterEach(function(){
     console.log('After Each 1.0');

    });
    
	it('test 1.0 ',function(){
      console.log('Test 1.0');
	});
  
    it('test 1.1',function(){
      console.log('Test 1.1');
	});



	describe('Suite 2.0',function() {
        before(function(){
    	console.log('Before All 2.0');
	    });
	    after(function(){
	    	console.log('After All 2.0');
	    }); 

        beforeEach(function(){
     	console.log('Before Each 2.0');

	    });

	    afterEach(function(){
	     console.log('After Each 2.0');

	    });


		it('Test 2.1',function() {
			console.log('Test 2.1');
		});

        describe('Suite 3.0', function(){

             it('Test 3.1',function() {
             	console.log('Test 3.1');
             });    
        });


	});


});