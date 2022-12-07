//1 USD = 1.79549 BGN
function usdToBgn(input) {
let USD =Number(input[0])
let BGN = USD * 1.79549
console.log(BGN)
}
usdToBgn(['22'])
usdToBgn(['100'])
usdToBgn(['12.5'])