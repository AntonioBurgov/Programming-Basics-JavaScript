function solve(numbers) {
    let currentNumber = 0;
    let sum1 = 0;
    let sum2 = 0;
    let isTrue = false;
    for (let i = 0; i < numbers.length; i++) {
        for (let l = 0; l < i; l++) {
            sum1 += numbers[l];
        }
        for (let r = numbers.length - 1; r > i; r--) {
            sum2 += numbers[r];
        }
        if (sum1 === sum2) {
            isTrue = true;
        }
        if (isTrue) {
            console.log(i);
            break;
        }
        sum1 = 0;
        sum2 = 0;
        isTrue = false;
    }
    if (!isTrue) {
        console.log(`no`);
    }
}
solve([1])