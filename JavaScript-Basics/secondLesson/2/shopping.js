function shopping(input) {
  let budget = Number(input[0]);
  let videoCard = Number(input[1]);
  let processor = Number(input[2]);
  let ram = Number(input[3]);
  let videoCardPrice = 250
  let processorPrice = (videoCard * videoCardPrice) * 0.35
  let ramPrice =(videoCard * videoCardPrice) * 0.1
  let money = videoCard * videoCardPrice + processor * processorPrice + ram * ramPrice
  if(videoCard > processor){
    money = money * 0.85
  }
    if(money <= budget){
        console.log(`You have ${Math.abs(money - budget).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${ Math.abs(money - budget).toFixed(2)} leva more!`);
    }
    

}
shopping(["900",
"2",
"1",
"3"])

