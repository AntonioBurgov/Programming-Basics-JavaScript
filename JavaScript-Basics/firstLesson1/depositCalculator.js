function amount(input) {
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let depositAmount = Number(input[0]);
    let monthCount = Number(input[1]);
    let interstRate = Number(input[2] / 100)
    let finalAmount = depositAmount + monthCount * ((depositAmount * interstRate) / 12)
    console.log(finalAmount)
}
amount(["200 ",
    "3 ",
    "5.7 "])