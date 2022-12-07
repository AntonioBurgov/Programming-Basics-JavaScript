function reading(input) {
let pageCount = Number(input[0])
let pageReadPerDay = Number(input[1])
let dayCount = Number(input[2])
let nedeedHours = (pageCount / pageReadPerDay) / dayCount
console.log(nedeedHours)
}
reading(["212 ",
    "20 ",
    "2 "])
