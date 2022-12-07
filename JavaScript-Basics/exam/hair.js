function hair(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sum = 0;
    while (command !== `closed`) {
        let type = command
        let wants = input[index]
        index++;
        command = input[index];
        index++;
        if(sum >= target){
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${sum}lv.`);
            break;
        }
        if (type === `haircut`) {
            switch (wants) {
                case `mens`: sum += 15
                    break;
                case `ladies`: sum += 20
                    break;
                case `kids`: sum += 10
                    break;
            }
        } else {
            switch (wants) {
                case `touch up`: sum += 20
                    break;
                case `full color`: sum += 30
                    break;
            }
        }
    }
    if (command === `closed`) {
        if (sum >= target) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${sum}lv.`);
        } else {
            console.log(`Target not reached! You need ${target - sum.toFixed(2)}lv. more.`);
            console.log(`Earned money: ${sum}lv.`);

        }
    }
}
hair(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])




