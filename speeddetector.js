const speedOfCar = prompt("speed of car:");

if (speedOfCar <= 70) {
  console.log("Ok");
} else {
  function speedOver() {
    let demeritPoints = (speedOfCar - 70) / 5;
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
  speedOver();
}
