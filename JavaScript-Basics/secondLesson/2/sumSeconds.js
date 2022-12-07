function sumSeconds(input) {
let first = Number(input[0]);
let second = Number(input[1]);
let third = Number(input[2]);
let totalInSec = first + second + third
let timeInMin = Math.floor(totalInSec / 60)
let timeInSec = totalInSec % 60
if(timeInSec < 10){
    console.log(`${timeInMin}:0${timeInSec}`);

}else {
    console.log(`${timeInMin}:${timeInSec}`);
}
}
sumSeconds(["50",
"50",
"49"])


