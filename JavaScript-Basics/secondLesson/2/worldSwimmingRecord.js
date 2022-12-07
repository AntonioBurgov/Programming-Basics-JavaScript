function worldSwimmingRecord(input) {
   let currentRecord = Number(input[0]);
   let distanceInM = Number(input[1]);
   let secForM = Number(input[2]);
   let slow = (Math.floor(distanceInM / 15 ) * 12.5)
let time = distanceInM * secForM + slow
if(time < currentRecord) {
    console.log(` Yes, he succeeded! The new world record is ${(time).toFixed(2)} seconds.`);
}else console.log(`No, he failed! He was ${Math.abs(time - currentRecord).toFixed(2)} seconds slower.`);
}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
