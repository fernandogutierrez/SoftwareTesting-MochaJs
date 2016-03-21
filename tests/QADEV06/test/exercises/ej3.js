	
var expect = require('chai').expect;

    var toFahrenheit = function(val,type) {
        if (type == 'celcius') {
          return (val * (9/5)) + 32;
        }
        if (type == 'kelvin') {
        	return (val - 273.15) * (9/5) + 32; 
        } 
        if (type == 'fahrenheit') {
        	return val;
        }
	}
    var toCelcius = function(val,type) {
    	if (type == 'fahrenheit') {
            return (val - 32) * (5/9); 
    	}
    	if (type == 'celcius') {
    		return val;
    	}
    	if (type == 'kelvin') {
    		return val - 273.15;
    	}
    }
    var toKelvin = function(val,type) {

        if (type == 'fahrenheit') {
        	return (val - 32) * 5/9 + 273.15; 
    	}
    	if (type == 'celcius') {
             return val + 273.15 ;
    	}
    	if (type == 'kelvin') {
    		 return val;
    	}
    }

describe('temperatures',function(){
  
  var fahArray = [{val:12 ,type:'celcius', res:53.6},
                  {val:20 ,type:'celcius', res:68},
                  {val:35 ,type:'kelvin', res:-396.66999999999996},
                  {val:-13 ,type:'kelvin', res:-483.06999999999994},
                  {val:15 ,type:'fahrenheit', res:15}];

  fahArray.forEach(function(e) {

	it('#Fahrenheit', function() {
		
       var val = e.val;
       var tempType = e.type;
       
       var actualRes = toFahrenheit(val,tempType);
       var expectedRes = e.res;

       
       expect(actualRes).to.equal(expectedRes);
	});
  });



  var kelvArray = [{val:12 ,type:'celcius', res:285.15},
                   {val:20 ,type:'celcius', res:293.15},
                   {val:35 ,type:'kelvin', res:35},
                   {val:-13 ,type:'fahrenheit', res:248.14999999999998},
                   {val:15 ,type:'fahrenheit', res:263.7055555555555}];

   kelvArray.forEach(function(e) {

	it('#Kelvin', function() {
		
       var val = e.val;
       var tempType = e.type;
       
       var actualRes = toKelvin(val,tempType);
       var expectedRes = e.res;

       
       expect(actualRes).to.equal(expectedRes);
	});
  });



    var celcArray = [{val:12 ,type:'celcius', res:12},
                     {val:20 ,type:'kelvin', res:-253.14999999999998},
                     {val:35 ,type:'kelvin', res:-238.14999999999998},
                     {val:-13 ,type:'fahrenheit', res:-25},
                     {val:15 ,type:'fahrenheit', res:-9.444444444444445}];

   celcArray.forEach(function(e) {

	it('#Celcius', function() {
		
       var val = e.val;
       var tempType = e.type;
       
       var actualRes = toCelcius(val,tempType);
       var expectedRes = e.res;

       
       expect(actualRes).to.equal(expectedRes);
	});
  });

});


