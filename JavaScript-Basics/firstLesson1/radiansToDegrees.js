//градус = радиан * 180 / π
function radToDegrees(input) {
let radians = Number(input[0])
let degrees = radians * 180 / Math.PI
console.log(degrees)
}
radToDegrees(["3.1416"])
radToDegrees(["6.2832"])
