function lunchBreak(input) {
    let name = input[0]
    let duration = Number(input[1]);
    let pochivka = Number(input[2]);
    let lunch = pochivka / 8
    let otdih = pochivka / 4
    let timeLeft = pochivka - lunch - otdih
    if(timeLeft < duration){
        console.log(`You don't have enough time to watch ${name}, you need ${Math.abs((duration - timeLeft))} more minutes.`)
    } else {console.log(`You have enough time to watch ${name} and left with ${Math.abs((duration - timeLeft))} minutes free time.`)}
    
}
lunchBreak(["Game of Thrones",
"60",
"90"])

