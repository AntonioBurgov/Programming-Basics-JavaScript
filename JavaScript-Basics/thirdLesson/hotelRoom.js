function hotelRoom(input) {
    let month = input[0];
    let nightCount = Number(input[1])
    let apartament = 0
    let studio = 0
    switch (month) {
        case "May":
            studio = 50 * nightCount
            apartament = 65 * nightCount
            if (nightCount > 7 && nightCount < 14) {
                studio = studio * 0.95
            } if (nightCount > 14) {
                studio = studio * 0.70
            } if (nightCount > 14) {
                (apartament = apartament * 0.90).toFixed(2)
            }
            break;
        case "June":
            studio = 75.20 * nightCount
            apartament = 68.7 * nightCount
            if (nightCount > 14) {
                studio = studio * 0.80
            } if (nightCount > 14) {
                (apartament = apartament * 0.90).toFixed(2)
            }
            break;
        case "July":
            studio = 76 * nightCount
            apartament = 77 * nightCount
            if (nightCount > 14) {
                (apartament = apartament * 0.90).toFixed(2)
            }
            break;
        case "August":
            studio = 76 * nightCount
            apartament = 77 * nightCount
            if (nightCount > 14) {
                (apartament = apartament * 0.90).toFixed(2)
            }
            break;
        case "September":
            studio = 75.20 * nightCount
            apartament = 68.7 * nightCount
            if (nightCount > 14) {
                studio = studio * 0.80
            } if (nightCount > 14) {
                (apartament = apartament * 0.90).toFixed(2)
            }
            break;
        case "October":
            studio = 50 * nightCount
            apartament = 65 * nightCount
            if (nightCount > 7) {
                studio = studio * 0.95
            } if (nightCount > 14 && nightCount < 14) {
                studio = studio * 0.70
            } if (nightCount > 14) {
                (apartament = apartament * 0.90).toFixed(2)
            }
            break;
    }
    console.log(`Apartment: ${(apartament).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio).toFixed(2)} lv.`);
}
hotelRoom(["May",
    "15"])
