function timeAddMinutes(input) {
    let hours = Number(input[0]);
    let min = Number(input[1]);
    let totalInMin = hours * 60 + min + 15
    let  h = Math.floor(totalInMin / 60)
    let m = totalInMin % 60
    if(h === 24){
        h = 0
    }
    if(m < 10){
        console.log(`${h}:0${m}`);
    } else{
        console.log(`${h}:${m}`);
    }
}
timeAddMinutes(["0", "01"])