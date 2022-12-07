function solve(numbers, givenNumber) {
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < numbers.length; i++) {
        num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            num2 = numbers[j];
            if (num1 + num2 === givenNumber) {
                console.log(num1 + ' ' + num2);
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23], 8)