function repair(input) {
//•	Предпазен найлон - 1.50 лв. за кв. метър
//	Боя - 14.50 лв. за литър
//	Разредител за боя - 5.00 лв. за литър
let naylon = Number(input[0]) + 2
let paint = Number(input[1]) + (Number(input[1]) * 0.1)
let thinner = Number(input[2])
let workHours = Number(input[3])
let consumption = naylon * 1.5 + paint * 14.5 + thinner * 5 + 0.4
let workConsumption = consumption * 0.3 * workHours
let fullPrice = workConsumption + consumption

console.log(fullPrice)
}
repair(["10 ",
    "11 ",
    "4 ",
    "8 "])