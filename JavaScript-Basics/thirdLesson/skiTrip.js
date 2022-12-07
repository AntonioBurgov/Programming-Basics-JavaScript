function skiTrip(input) {
    let day = Number(input[0]);
    let type = input[1];
    let oppinion = input[2];
    let sum = 0;
    switch (type) {
        case "room for one person":
            sum = (day - 1) * 18 
            break;
        case "apartment":
            sum = (day - 1) * 25 
            if (day < 10) {
                sum = sum * 0.7
            } else if (day >= 10 && day <= 15) {
                sum = sum * 0.65
            } else {
                sum = sum * 0.5
            }
            break;
        case "president apartment":
            sum = (day - 1) * 35
            if (day < 10) {
                sum = sum * 0.9
            } else if (day >= 10 && day <= 15) {
                sum = sum * 0.85
            } else {
                sum = sum * 0.8
            }
            break;
    }
    if (oppinion === "positive") {
        sum = sum * 1.25
    } else {
        sum = sum * 0.9
    }
    console.log(sum.toFixed(2));

}
skiTrip(["30",
"president apartment",
"negative"])

