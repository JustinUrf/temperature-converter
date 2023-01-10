
function conversion() {
  return (temp1 - 32) * 5/9;
}

const temp1 = parseInt(prompt("Enter a temperature to be converted to Celsius"));

window.alert(temp1 + " Degrees Fahrenheit would be " + conversion() + " Degrees Celsius")

// parameters practice 
// let a = 10;
// let b = 10;
// let c = 20;
// let x = 10
// let y = 300
// let z = 5000

// function multipleNumbers(x,y,z) {
//   return x + y + z
// }
// window.alert(multipleNumbers(a,b,c))