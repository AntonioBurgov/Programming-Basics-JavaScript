function cleverLilly(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);
    let money = 0;
    let currentMoney = 0;
    let toyCounter = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            currentMoney += 10;
            money += currentMoney;
            money--
        }else { 
            toyCounter++;

        }
    }
    let total = money + toyCounter * priceToy
    let diff = Math.abs(total - priceWashingMachine)
    if(total >= priceWashingMachine){
        console.log(`Yes! ${diff.toFixed(2)} `);
    }else {
        console.log(`No! ${diff.toFixed(2)}` );
    }

}
cleverLilly(["21",
"1570.98",
"3"])
