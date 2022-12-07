function solve(numbers){
    let counter = 0;
    let currentNumber = 0;
    for(let i = 0; i< numbers.length;i++){
currentNumber = numbers[i];
if(currentNumber === numbers[i + 1]){
    counter++;
    
}
    }

}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])