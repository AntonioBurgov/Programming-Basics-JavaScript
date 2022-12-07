function endPrice(input) {
let pricePerQuadMeter = 7.61;
let priceForAll = Number(input[0] * pricePerQuadMeter)
let discount = 18 /100
let discountPrice = Number((input[0] * pricePerQuadMeter) * discount )
let fullPrice = priceForAll - discountPrice

console.log('The final price is: ' + fullPrice + ' lv.')
console.log('The discount is: ' + discountPrice + ' lv.')
}
endPrice([["550"]])
endPrice(['150'])