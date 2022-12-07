function restaurant(input) {
    //•	Пилешко меню –  10.35 лв. 
    //	Меню с риба – 12.40 лв. 
    //	Вегетарианско меню  – 8.15 лв. 
let chickenMenu = Number(input[0])
let fishMenu = Number(input[1])
let vegetarierMenu = Number(input[2])
let price = chickenMenu * 10.35 + fishMenu * 12.4 + vegetarierMenu * 8.15
let dessert = price * 0.2 
let delivery = 2.5
let bill = price + dessert + delivery

console.log(bill)
}
restaurant(["2 ",
    "4 ",
    "3 "])