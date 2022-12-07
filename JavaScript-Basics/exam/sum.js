function sum(input) {
    let n = Number(input[0]);
    let isValid = false
    let res = 0;
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    if ((a + b + c + d === a * b * c * d) && n % 5 === 0) {
                        res = `${a}${b}${c}${d}`;
                        isValid = true
                        break;
                    } if (Math.floor((a * b * c * d) / (a + b + c + d)) === 3 && n % 3 === 0) {
                        res = `${d}${c}${b}${a}`
                        isValid = true
                        break;
                    }

                    if (isValid) { break; }
                }
                if (isValid) { break; }
            }
            if (isValid) { break; }
        }
        if (isValid) { break; }
    }
    if (isValid) {
        console.log(res);
    } else {
        console.log(`Nothing found`);
    } 

}
sum(["214"])