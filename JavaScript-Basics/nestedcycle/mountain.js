function mountain(input){
    index = 0;
    let n = Number(input[index]);
    index++;
    let musala = 0
    let momblan = 0
    let kalimandjaro = 0
    let k2 = 0
    let everest = 0
    let total = 0
    for(let i =  0; i < n; i++){
        let groupMember = Number(input[index]);
        index++;
        if(groupMember <= 5){
            musala += groupMember
        } else if(groupMember > 5 && groupMember <= 12){
            momblan += groupMember
        } else if(groupMember > 12 && groupMember <= 25){
            kalimandjaro += groupMember
        } else if(groupMember > 25 && groupMember <= 40){
            k2 += groupMember
        } else {
            everest += groupMember
        }
        
        
    }
    total = total + momblan + musala + k2 +kalimandjaro + everest
    console.log((musala / total * 100).toFixed(2) + "%");
    console.log((momblan / total * 100).toFixed(2) + "%");
    console.log((kalimandjaro / total * 100).toFixed(2) + "%");
    console.log((k2 / total * 100).toFixed(2) + "%");
    console.log((everest / total * 100).toFixed(2) + "%");
    
}
mountain(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

