const prompt = require("prompt-sync")();
const speedOfCar = prompt("please input the speed of car:");
if (speedOfCar < 70) {
  console.log("Ok");
} else {
  function speedOver() {
    let demerit = (speedOfCar - 70) / 5;
    if (demerit > 12) {
      console.log("License suspended");
    } else {
      const message = `Points: ${demerit}`;
      console.log(message);
    }
  }
  speedOver();
}
