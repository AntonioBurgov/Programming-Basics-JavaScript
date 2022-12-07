function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothing = Number(input[2]);
let decor = budget * 0.1
let moneyClothing = clothing * statistCount
    if(statistCount > 150){
    moneyClothing = moneyClothing * 0.9
}
let total = decor + moneyClothing
if(total > budget ){
    console.log("Not enough money!");
    console.log(`Wingard needs ${Math.abs(total - budget).toFixed(2)} leva more.`);
}else {
    console.log("Action!" );
    console.log(`Wingard starts filming with ${Math.abs(total - budget).toFixed(2)} leva left.`);
}
}
godzillaVsKong(["20000",
"120",
"55.5"])

