
function conversion() {
  return (temp1 - 32) * 5/9;
}

const temp1 = parseInt(prompt("Enter a temperature to be converted to Celsius"))

window.alert(temp1 + " Degrees Fahrenheit would be " + conversion() + " Degrees Celsius")



