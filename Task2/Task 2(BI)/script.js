function convertToFahrenheit() {
	// Get input temperature value in Celsius
	var celsius = document.getElementById("input-temp").value;
	
	// Convert Celsius to Fahrenheit
	var fahrenheit = (celsius * 9/5) + 32;
	
	// Display Fahrenheit temperature in output field
	document.getElementById("output-fahrenheit").innerHTML = fahrenheit.toFixed(2) + " °F";
}

function convertToKelvin() {
	// Get input temperature value in Celsius
	var celsius = document.getElementById("input-temp").value;
	
	// Convert Celsius to Kelvin
	var kelvin = parseFloat(celsius) + 273.15;
	
	// Display Kelvin temperature in output field
	document.getElementById("output-kelvin").innerHTML = kelvin.toFixed(2) + " K";
}