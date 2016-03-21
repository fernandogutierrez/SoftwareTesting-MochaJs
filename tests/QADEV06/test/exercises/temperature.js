var Temperature = function(type) {
	
	this.toFahrenheit = function(val,type) {
        if (val == 'celcius') {
          return (val * (9/5)) + 32;
        }
        if (val == 'kelvin') {
        	return (val - 273.15) * (9/5) + 32; 
        } 
        if (val == 'fahrenheit') {
        	return val;
        }
  
	}

    this.toCelcius = function(val,type) {
    	if (val == 'fahrenheit') {
            return (val - 32) * (5/9); 
    	}
    	if (val == 'celcius') {
    		return val;
    	}
    	if (val == 'kelvin') {
    		return val - 273.15;
    	}
    }
    
    this.toKelvin = function(val,type) {

        if (val == 'fahrenheit') {
        	return (val - 32) * 5/9 + 273.15; 
    	}
    	if (val == 'celcius') {
             return val + 273.15 ;
    	}
    	if (val == 'kelvin') {
    		 return val;
    	}

    }
}