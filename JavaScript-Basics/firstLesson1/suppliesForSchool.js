function supplies(input) {
//	Пакет химикали - 5.80 лв. 
//	Пакет маркери - 7.20 лв. 
//	Препарат - 1.20 лв (за литър)
let pencils = Number(input[0])
let markers = Number(input[1])
let cleeningTools = Number(input[2])
let discount = Number(input[3] / 100)
let fullPrice = (pencils * 5.8 + markers * 7.2 + cleeningTools * 1.2) - ((pencils * 5.8 + markers * 7.2 + cleeningTools * 1.2) * discount)

console.log(fullPrice)
}
supplies(["2 ",
    "3 ",
    "4 ",
    "25 "])