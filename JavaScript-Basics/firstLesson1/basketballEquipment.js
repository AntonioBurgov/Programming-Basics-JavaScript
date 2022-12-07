function basketball(input) {
    //Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    //	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    //	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    //	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
let yearFee = Number(input[0])
let shoes = yearFee - yearFee * 0.4
let clothes = shoes - shoes * 0.2
let ball = clothes / 4
let accessories = ball / 5
let fullPrice = yearFee + shoes + clothes + ball + accessories

console.log(fullPrice)
}
basketball(["365 "])