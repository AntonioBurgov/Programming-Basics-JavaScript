function toyShop(input){
  let holidayPrice = Number(input[0]); 
  let puzzle = Number(input[1]);
  let doll = Number(input[2]);
  let bear = Number(input[3]);
  let minion = Number(input[4]);
  let truck = Number(input[5]); 
  let money = puzzle * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2
  let count = puzzle + doll + bear + minion + truck
if(count >= 50){ 
    money = money * 0.75
} money = money * 0.9
if(money >= holidayPrice){
    console.log(`Yes! ${Math.abs(money - holidayPrice).toFixed(2)} lv left.`);
}else {console.log(`Not enough money! ${Math.abs(money - holidayPrice).toFixed(2)} lv needed.`)}

}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

