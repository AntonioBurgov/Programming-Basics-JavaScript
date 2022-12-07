function ranklist(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let avgPoints = 0
    let winCounter = 0
    for (let i = 0; i < n; i++) {
        let game = input[index];
        index++;
        switch (game) {
            case `W`:
                winCounter++
                avgPoints += 2000
                break;
            case `F`:
                avgPoints += 1200
                break;
            case `SF`:
                avgPoints += 720
                break;
        }
    }
    let totalPoints = avgPoints + startPoints
    console.log(`Final points: ${Math.floor(totalPoints)}`);
    console.log(`Average points: ${Math.floor(avgPoints / n)}`);
    console.log((winCounter / n * 100 ).toFixed(2) + "%");
}
ranklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])

