function cinema(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let sum = 0;
    switch (type) {
        case "Premiere":
            sum = r * c * 12
            console.log(`${sum.toFixed(2)} leva`);
            break;
        case "Normal":
            sum = r * c * 7.5
            console.log(`${sum.toFixed(2)} leva`);
            break;
        case "Discount":
            sum = r * c * 5
            console.log(`${sum.toFixed(2)} leva`);
            break;
    }
}
cinema(["Normal",
    "21",
    "13"])
