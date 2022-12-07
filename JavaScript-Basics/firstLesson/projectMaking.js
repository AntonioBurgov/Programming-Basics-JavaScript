function project(input) {
let name = input[0];
let project = Number(input[1])
let timeForProject = project * 3
console.log(`The architect ${name} will need ${timeForProject} hours to complete ${project} project/s.`)
}
project(["George ",
"4 "])
