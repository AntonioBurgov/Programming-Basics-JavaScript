function shedule(input) {
    let index = 0;
    let name = input[index];
    index++;
    for (let i = 1; i <= 31; i++) {
        console.log(`${i} July: ${name}`);
        name = input[index];
        index++;
        if (index === 3) {
            index = 0;
        }
    }
    console.log(`-----------------------------------------------------------------------`);
    for (let i = 1; i <= 31; i++) {
        console.log(`${i} August: ${name}`);
        name = input[index];
        index++;
        if (index === 3) {
            index = 0;
        }
    }
}
shedule([`Mitko`,
    `Antonio`,
    `Neli`])