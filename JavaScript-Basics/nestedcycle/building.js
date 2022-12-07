function building(input){
let etage = Number(input[0]);
let room = Number(input[1]);
let res = "";
for(let i = etage;i > 0;i--){
    for(let z = 0;z < room;z++){
        res += `${i}${z}`
        console.log(`${res} ${res}`);
       res = ""
    }
}


}
building(["6", "4"])