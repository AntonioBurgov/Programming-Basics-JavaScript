function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);
    let timeExam = hourExam * 60 + minExam;
    let timeArrival = hourArrival * 60 + minArrival;
    let diff = Math.abs(timeArrival - timeExam)
    let h = Math.floor(diff / 60)
    let m = diff % 60
    if (timeArrival <= timeExam && diff <= 30) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else if (timeArrival > timeExam) {
        console.log("Late");
        if (h === 0) {
            console.log(`${m} minutes after the start`);
        } else if (m < 10) {
            console.log(`${h}:0${m} hours after the start`)
        } else { console.log(`${h}:${m} hours after the start`) }
    } else if(timeArrival < timeExam && diff > 30) {
        console.log("Early")
        if (h === 0) {
            console.log(`${m} minutes before the start`);
        } else if (m < 10) {
            console.log(`${h}:0${m} hours before the start`)
        } else { console.log(`${h}:${m} hours before the start`) }
    }
}
onTimeForTheExam(["16",
    "00",
    "15",
    "00"])







