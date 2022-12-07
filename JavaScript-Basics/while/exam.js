function exam(input) {
    index = 0;
    let poorGrade = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let poorGradeCounter = 0;
    let problems = 0;
    let avg = 0;
    let taskName = ``
    while (command !== `Enough`) {
        taskName = command
        problems++;
        avg += grade;
        if (grade <= 4) {
            poorGradeCounter++;
            if (poorGradeCounter === poorGrade) {
                console.log(`You need a break, ${poorGradeCounter} poor grades.`);
            }
        }
        command = input[index];
        index++;
        grade = Number(input[index]);
        index++;
    }
    if (command === `Enough`) {
        console.log(`Average score: ${avg / problems}`);
        console.log(`Number of problems: ${problems}`);
        console.log(`Last problem: ${taskName}`)
    }
}
exam(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
    
    
