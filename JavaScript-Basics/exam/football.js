function football(input){
let shirt = Number(input[0]);
let target = Number(input[1]);
let shorts = shirt * 0.75
let socks = shorts * 0.20
let boots = (shirt + shorts) * 2
let sum = ((shirt + shorts + socks + boots) * 0.85).toFixed(2)
if(sum >= target){
    console.log(`Yes, he will earn the world-cup replica ball!`);
    console.log(`His sum is ${sum} lv.`);
}else {
    console.log(`No, he will not earn the world-cup replica ball.`);
console.log(`He needs ${(target - sum).toFixed(2)} lv. more.`);
}
}
football(["59.99",
"500"])
