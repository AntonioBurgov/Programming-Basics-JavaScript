function solve(numbers) {
    let num1 = 0;
    let array = [];
    for (let i = 0; i < numbers.length; i++) {

        let currentNumber = numbers[i];
        let isTrue = true;

        for (let j = i + 1; j < numbers.length; j++) {
            if (currentNumber <= numbers[j]) {
                isTrue = false;
            }
        }
        if (isTrue) {
            array.push(numbers[i])
        }
    }
    console.log(array.join(' '));

}
solve([27, 19, 42, 2, 13, 45, 48])