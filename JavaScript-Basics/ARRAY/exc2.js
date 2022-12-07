function solve(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let firstElement = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let secondElement = arr2[j];
            if (firstElement === secondElement) {
                console.log(firstElement);
            }
        }
    }
}
solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)