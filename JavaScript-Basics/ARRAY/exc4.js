function solve(numbers, rotation) {
    let firstNumber = 0;
    let lastNumber = numbers[numbers.length - 1]
    for (let i = 0; i < rotation; i++) {
        firstNumber = numbers[0];
        for (let j = 0; j < numbers.length - 1; j++) {
            numbers[j] = numbers[j + 1];
        }
     numbers[numbers.length - 1] = firstNumber
    }
    console.log(numbers.join(` `));
}
solve([51, 47, 32, 61, 21], 2)