function hristogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    for (let i = 0; i < n; i++) {
        let number = Number(input[index]);
        index++;
        if (number < 200) {
            p1Counter++
        } else if (number >= 200 && number < 400) {
            p2Counter++;
        } else if (number >= 400 && number < 600) {
            p3Counter++
        } else if (number >= 600 && number < 800) {
            p4Counter++
        } else {
            p5Counter++
        }
    }
    console.log((p1Counter / n * 100).toFixed(2) + "%");
    console.log((p2Counter / n * 100).toFixed(2) + "%")
    console.log((p3Counter / n * 100).toFixed(2) + "%")
    console.log((p4Counter / n * 100).toFixed(2) + "%")
    console.log((p5Counter / n * 100).toFixed(2) + "%")
   
}
hristogram(["3",
"1",
"2",
"999"]
)