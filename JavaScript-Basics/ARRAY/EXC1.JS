function solve(numbers) {
    let num = 0;
    let arr = [];
    let sum = 0;
    let sum1 = 0;
    for (let i = 0; i < numbers.length; i++) {
        num = numbers[i];
sum1 += num
        if (num % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }
        arr.push(num);
        sum += num
    }
    console.log(arr);
    console.log(sum1    );
    console.log(sum);
}
solve([-5, 11, 3, 0, 2])