function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let lenght = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;
    let command =input[index];
    index++;
    let apartament = hight * lenght * width
    while (command !== `Done`) {
        apartament -= Number(command)
        if (apartament <= 0) {
            console.log(`No more free space! You need ${Math.abs(apartament)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === `Done`){
        console.log(`${Math.abs(apartament)} Cubic meters left.`)
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
