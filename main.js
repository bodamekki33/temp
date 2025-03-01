// Function to convert temperature based on selected unit
function convertTemperature() {
  // Get the user input value and convert it to a float
  const temperature = parseFloat(document.getElementById("temperature").value);
  // Get the selected unit from the dropdown
  const unit = document.getElementById("unit").value;
  // Get the element to display the result
  const resultDiv = document.getElementById("result");
  // Check if the entered temperature is a valid number
  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid temperature.";
    return;
  }
  let convertedTemp;
  let convertUnit;
  //Check which unit was selected and perform the conversion
  if (unit == "celsius") {
    //convert Celsius to Fahrenheit
    convertedTemp = (temperature * 9) / 5 + 32;
    convertUnit = "fahrenheit";
  } else {
    // Convert Fahrenheit to Celsius
    convertedTemp = ((temperature - 32) * 5) / 9;
    convertUnit = "celsius";
  }
  // Display the converted temperature with 2 decimal places
  resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}°
    ${convertUnit}`;
}
