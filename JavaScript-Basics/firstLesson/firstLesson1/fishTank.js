function fishTank(input) {
    //	Дължина в см – цяло число в интервала [10 … 500]
    //	Широчина в см – цяло число в интервала [10 … 300]
    //	Височина в см – цяло число в интервала [10… 200]
    //	Процент  – реално число в интервала [0.000 … 100.000]
let lenght = Number(input[0])
let wide = Number(input[1])
let hight = Number(input[2])
let percent = Number(input[3])
let cubeCm = lenght * wide * hight
let liters = cubeCm / 1000
let neededLiters = liters - liters * percent /100

console.log(neededLiters)
}
fishTank(["85 ",
    "75 ",
    "47 ",
    "17 "])