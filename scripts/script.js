currentYear = new Date().getFullYear()

var calculateAge = function(birthYear) {
	currentAge = currentYear - birthYear
	possibleAge = currentYear - birthYear - 1
	var text = ("<p class='appended'>You are either " + possibleAge + " or " + currentAge + "</p>")
	return text;
}

var calculateSupply = function(age, amountPerDay) {
	MAX_AGE = 90
	supply = (MAX_AGE - age) * amountPerDay * 365
	roundedSupply = Math.round(supply)
	var text = ("<p class='appended'>You will need " + roundedSupply + " to last you until the ripe old age of " + MAX_AGE + "</p>" )
	return text;
} 
calculateSupply(25, 11.3)
calculateSupply(89, 1)
calculateSupply(0, 100)

var calcCircumfrence = function(radius) {
	circumference = 2 * radius // I resigned from using Math.PI
	return circumference;
} 

var calcArea = function(radius) {
	area = Math.pow(radius,2)
	return area;
}

var circleData = function(radius) {
	var text = ("<p class='appended'>The circumference is " + calcCircumfrence(radius) + " Π <br> The area is " + calcArea(radius) + " Π</p>")
	return text;
}

var celsiusToFahrenheit = function(tempCelsius) {
	tempeFahrenheit = Math.round(((tempCelsius * 9)/5) + 32)
	var textt = ("<p class='appended'>" + tempCelsius + "°C is " + tempeFahrenheit + "°F</p>" )
	return textt;
}

var fahrenheitToCelsius = function(tempeFahrenheit) {
	tempCelsius = Math.round((( tempeFahrenheit - 32 ) * 5 ) / 9)
	var text = ("<p class='appended'>" + tempeFahrenheit + "°F is " + tempCelsius + "°C</p>")
	return text;
}

$(document).ready(function() {

	$('#ageInput').attr('max', currentYear)
    $('#ageSubmit').click(function(event){
		$('#appendAge').empty();
		age = $('#ageInput').val();
		validationMessage = ("<span class='error'>Put number between 1900 and " + currentYear + "</span>")
		if(age){
			event.preventDefault();
			if( 1900 < Number(age) && Number(age) < currentYear){
				$(calculateAge(age)).hide().appendTo('#appendAge').fadeIn(1000);
			}
			else {
				$(validationMessage).hide().appendTo('#appendAge').fadeIn(1000);
			}
		}
	})

    $('#supplySubmit').click(function(event){
		event.preventDefault();
		$('#appendSupply').empty();
    	age = $('#ageSupplyInput').val();
    	amountPerDay = $('#amountPerDay').val();
    	validationMessage = ("<span class='error'>Put number bigger than 0</span>")
    	if(age > 0 && amountPerDay > 0){
			$(calculateSupply(age, amountPerDay)).hide().appendTo('#appendSupply').fadeIn(1000);
		}
		else {
			$(validationMessage).hide().appendTo('#appendSupply').fadeIn(1000);
		}
    })

    $('#geoSubmit').click(function(event){
		event.preventDefault();
		$('#appendGeo').empty();
    	radius = $('#radius').val();
    	validationMessage = ("<span class='error'>Put number bigger than 0</span>")
    	if(radius > 0){
			$(circleData(radius)).hide().appendTo('#appendGeo').fadeIn(1000);
		}
		else {
			$(validationMessage).hide().appendTo('#appendGeo').fadeIn(1000);
		}
		
    })

    $('#tempSubmit').click(function(event){
		event.preventDefault();
		$('#appendTemp').empty();
		temp = $('select[name=taskSelect]').val();
    	console.log(temp)
    	temperature = $('#temperature').val();
    	if (temp === 'C'){
    		$(celsiusToFahrenheit(temperature)).hide().appendTo('#appendTemp').fadeIn(1000);
    	}
    	else {
    		$(fahrenheitToCelsius(temperature)).hide().appendTo('#appendTemp').fadeIn(1000);
    	}
    })
});




