function competition(input){
let dancers = Number(input[0]);
let points = Number(input[1]);
let saison = input[2];
let place = input[3];
let sum = 0;
switch(place){
    case `Bulgaria`: sum += dancers * points 
    if(saison === `summer`){
        sum = sum * 0.95
    }else {sum = sum * 0.92
    }
    break;
    case `Abroad` : sum += (dancers * points) * 1.5
    if(saison === `summer`){
        sum = sum * 0.90
    }else {sum = sum * 0.85
    } 
    break;
}
let charityMoney = sum * 0.75
let moneyPerDancer = (sum * 0.25) / dancers
console.log(`Charity - ${charityMoney.toFixed(2)}`);
console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}
competition(["1",
"89.5",
"summer",
"Abroad"])
