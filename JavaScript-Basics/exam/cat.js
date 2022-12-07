function cat(input){
    let fat = Number(input[0]) / 9;
    let protein = Number(input[1]) / 4;
    let carbs = Number(input[2]) / 4;
    let cals = Number(input[3]);
    let water = Number(input[4]);
    let grams = fat * cals / 100 + protein * cals / 100 + carbs * cals / 100
    let calsForGram = cals / grams
    let realCals = (100 - water) / 100 * calsForGram
    console.log(realCals.toFixed(4));
}
cat([40,
40,
20,
3000,
40])

