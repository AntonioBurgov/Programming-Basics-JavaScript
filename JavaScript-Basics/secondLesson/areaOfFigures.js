function area(input) {
  let shape = input[0]
  if(shape === `square`){
    let a = Number(input[1]);
    let areaSquare = a * a;
    console.log(areaSquare);
  }  else if(shape === `rectangle`){
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    let areaRectangle = sideA * sideB;
    console.log(areaRectangle);
  } else if(shape === `circle`) {
    let a = Number(input[1]);
    let areaCircle = Math.PI * a * a;
    console.log(areaCircle)
  } else if(shape === `triangle`) {
    let a = Number(input[1]);
    let h = Number(input[2]);
    let areaTriangle = (a * h) / 2
    console.log(areaTriangle)
  }
}
area(["circle",
"6"])

