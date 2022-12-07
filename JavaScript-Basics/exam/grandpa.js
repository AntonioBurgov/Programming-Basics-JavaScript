function grandpa(input){
index = 0;
let days = Number(input[index]);
index++;
let totalLiters = 0;
let avgGrad = 0;
for(let i = 0;i < days;i++){
let liters = Number(input[index]);
index++;
totalLiters += liters;
let grad = Number(input[index]);
index++;
avgGrad += liters * grad
}
avgGrad = avgGrad / totalLiters
console.log(`Liter: ${totalLiters.toFixed(2)}`);
console.log(`Degrees: ${avgGrad.toFixed(2)}`);
if(avgGrad < 38){
console.log(`Not good, you should baking!`);
}else if(avgGrad >= 38 && avgGrad <= 42){
console.log(`Super!`);
}else{
    console.log(`Dilution with distilled water!`);
}


}
grandpa(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
